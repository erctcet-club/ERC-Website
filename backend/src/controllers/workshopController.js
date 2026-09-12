import mongoose from 'mongoose';
import WorkshopRegistration from '../models/WorkshopRegistration.js';

/**
 * Generate a unique workshop registration ID: ERC-WS-XXXXX
 */
const generateWorkshopId = () => {
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `ERC-WS-${randomNum}`;
};

/**
 * Register a participant for an ERC workshop
 * POST /api/workshops/register
 */
export const registerWorkshopParticipant = async (req, res, next) => {
  try {
    const { name, email, phone, college, workshop } = req.body;

    // Fast-fail if database is not connected
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: 'Database service is connecting. Please ensure MONGODB_URI is configured in your environment.'
      });
    }

    // Validate presence of required fields
    if (!name || !email || !phone || !workshop) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, phone, and workshop.'
      });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanWorkshop = workshop.trim();

    // Check for duplicate registration before insertion
    const existingRegistration = await WorkshopRegistration.findOne({
      email: cleanEmail,
      workshop: cleanWorkshop
    });

    if (existingRegistration) {
      return res.status(409).json({
        success: false,
        message: 'You are already registered for this workshop.',
        registrationId: existingRegistration.registrationId
      });
    }

    // Generate unique ID ensuring no collision
    let registrationId = generateWorkshopId();
    let collisionCheck = await WorkshopRegistration.findOne({ registrationId });
    while (collisionCheck) {
      registrationId = generateWorkshopId();
      collisionCheck = await WorkshopRegistration.findOne({ registrationId });
    }

    const newRegistration = new WorkshopRegistration({
      name: name.trim(),
      email: cleanEmail,
      phone: phone.trim(),
      college: college ? college.trim() : 'TCET',
      workshop: cleanWorkshop,
      registrationId
    });

    await newRegistration.save();

    return res.status(201).json({
      success: true,
      message: 'Workshop registration successful',
      registrationId
    });
  } catch (error) {
    // Handle MongoDB unique index duplicate error (code 11000)
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'You are already registered for this workshop.'
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
 * Get workshop registration by ID
 * GET /api/workshops/registration/:id
 */
export const getWorkshopRegistration = async (req, res, next) => {
  try {
    const { id } = req.params;
    const registration = await WorkshopRegistration.findOne({ registrationId: id })
      .select('name email phone college workshop registrationId createdAt -_id');

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
