import express from 'express';
import { registerWorkshopParticipant, getWorkshopRegistration } from '../controllers/workshopController.js';
import { registrationLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// Apply rate limiter to workshop registration submissions
router.post('/register', registrationLimiter, registerWorkshopParticipant);

// Optional lookup
router.get('/registration/:id', getWorkshopRegistration);

export default router;
