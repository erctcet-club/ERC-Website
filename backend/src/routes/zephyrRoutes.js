import express from 'express';
import { registerZephyrDelegate, getZephyrRegistration } from '../controllers/zephyrController.js';
import { registrationLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// Apply rate limiter to registration submissions
router.post('/register', registrationLimiter, registerZephyrDelegate);

// Optional lookup
router.get('/registration/:id', getZephyrRegistration);

export default router;
