import rateLimit from 'express-rate-limit';

/**
 * General API Rate Limiter
 * 150 requests per 15 minutes per IP
 */
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 150,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP. Please try again after 15 minutes.'
  }
});

/**
 * Strict Registration Rate Limiter
 * Prevents spam bots and rapid form flood submissions
 * 15 registration submissions per 15 minutes per IP
 */
export const registrationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many registration attempts from this network. Please wait a few minutes before trying again.'
  }
});
