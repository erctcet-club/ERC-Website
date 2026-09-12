import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import zephyrRoutes from './routes/zephyrRoutes.js';
import workshopRoutes from './routes/workshopRoutes.js';
import { generalLimiter } from './middleware/rateLimiter.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
connectDB();

// Security Headers with Helmet
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// CORS Configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  process.env.FRONTEND_URL
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (such as mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.some(allowed => origin.startsWith(allowed) || allowed === '*')) {
      return callback(null, true);
    }
    
    // In development mode, allow all origins for local testing flexibility
    if (process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked request from origin: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Body Parser with payload limit
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Apply general rate limiter to all API endpoints
app.use('/api', generalLimiter);

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'ERC Backend Running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API Routes
app.use('/api/zephyr', zephyrRoutes);
app.use('/api/workshops', workshopRoutes);

// Root fallback
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Electronics & Robotics Club (ERC) TCET REST API',
    documentation: '/api/health'
  });
});

// 404 & Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

// Start HTTP Server
const server = app.listen(PORT, () => {
  console.log(`🚀 [ERC Backend] Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  console.log('⚠️ [ERC Backend] SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('🛑 [ERC Backend] HTTP server closed.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('⚠️ [ERC Backend] SIGINT received. Shutting down gracefully...');
  server.close(() => {
    console.log('🛑 [ERC Backend] HTTP server closed.');
    process.exit(0);
  });
});

export default app;
