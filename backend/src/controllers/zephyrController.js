import crypto from 'crypto';
import mongoose from 'mongoose';
import ZephyrRegistration from '../models/ZephyrRegistration.js';

/**
 * Generate a unique registration ID: ERC-ZEPHYR-XXXXX
 */
const generateZephyrId = () => {
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `ERC-ZEPHYR-${randomNum}`;
};

/**
 * Register a delegate for Zephyr 2026
 * POST /api/zephyr/register
 */
export const registerZephyrDelegate = async (req, res, next) => {
  try {
    const { name, email, phone, college, department, year, track } = req.body;

    // Fast-fail if database is not connected
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database service is connecting. Please ensure MONGODB_URI is configured in your environment.'
      });
    }

    // Validate presence of required fields
    if (!name || !email || !phone || !college || !track) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, phone, college, and track.'
      });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanTrack = track.trim();

    // Check for duplicate registration before insertion
    const existingRegistration = await ZephyrRegistration.findOne({
      email: cleanEmail,
      track: cleanTrack
    });

    if (existingRegistration) {
      return res.status(409).json({
        success: false,
        message: 'You are already registered for this event track.',
        registrationId: existingRegistration.registrationId
      });
    }

    // Generate unique ID ensuring no collision
    let registrationId = generateZephyrId();
    let collisionCheck = await ZephyrRegistration.findOne({ registrationId });
    while (collisionCheck) {
      registrationId = generateZephyrId();
      collisionCheck = await ZephyrRegistration.findOne({ registrationId });
    }

    const newRegistration = new ZephyrRegistration({
      name: name.trim(),
      email: cleanEmail,
      phone: phone.trim(),
      college: college.trim(),
      department: department ? department.trim() : 'General Engineering',
      year: year ? year.trim() : 'Second Year (SE)',
      track: cleanTrack,
      registrationId
    });

    await newRegistration.save();

    return res.status(201).json({
      success: true,
      message: 'Registration successful',
      registrationId
    });
  } catch (error) {
    // Handle MongoDB unique index duplicate error (code 11000)
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'You are already registered for this event track.'
      });
    }

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join('. ')
      });
    }

    next(error);
  }
};

/**
 * Get registration by ID (optional lookup endpoint)
 * GET /api/zephyr/registration/:id
 */
export const getZephyrRegistration = async (req, res, next) => {
  try {
    const { id } = req.params;
    const registration = await ZephyrRegistration.findOne({ registrationId: id })
      .select('name college department year track registrationId createdAt -_id');

    if (!registration) {
      return res.status(404).json({
        success: false,
        message: 'Registration not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: registration
    });
  } catch (error) {
    next(error);
  }
};
