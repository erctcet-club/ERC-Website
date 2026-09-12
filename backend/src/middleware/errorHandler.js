/**
 * Centralized Production Error Handling Middleware
 */
export const errorHandler = (err, req, res, next) => {
  console.error(`🚨 [API Error] ${req.method} ${req.originalUrl}:`, err);

  let statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  let message = err.message || 'Internal Server Error';

  // Handle Mongoose / MongoDB Duplicate Key Error (E11000)
  if (err.code === 11000) {
    statusCode = 409;
    message = 'You are already registered for this event.';
  }

  // Handle Mongoose Validation Errors
  else if (err.name === 'ValidationError') {
    statusCode = 400;
    const errors = Object.values(err.errors).map(e => e.message);
    message = errors.join('. ');
  }

  // Handle Database Connection / Buffering Errors
  else if (err.name === 'MongooseError' && err.message.includes('buffering timed out')) {
    statusCode = 503;
    message = 'Database service temporarily unavailable. Please try again in a moment.';
  }

  // Handle Syntax / Malformed JSON Body
  else if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    statusCode = 400;
    message = 'Malformed JSON request body.';
  }

  // In production, mask unhandled internal server errors
  else if (process.env.NODE_ENV === 'production' && statusCode === 500) {
    message = 'Something went wrong. Please try again later.';
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && statusCode === 500 && { stack: err.stack })
  });
};

/**
 * 404 Not Found Middleware
 */
export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `API Route Not Found - [${req.method}] ${req.originalUrl}`
  });
};
