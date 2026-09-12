import mongoose from 'mongoose';

/**
 * Connect to MongoDB Atlas database
 */
export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn('⚠️ [MongoDB] MONGODB_URI is not defined in environment variables. Database operations will fail until configured.');
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      // Modern mongoose defaults are optimal; can set options if needed
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`✅ [MongoDB] Connected successfully to host: ${conn.connection.host} | DB: ${conn.connection.name}`);
  } catch (error) {
    console.error(`❌ [MongoDB] Connection error: ${error.message}`);
    // In production, we don't necessarily kill the process immediately so health checks can still report db status
  }
};

// Monitor connection events
mongoose.connection.on('disconnected', () => {
  console.warn('⚠️ [MongoDB] Disconnected from MongoDB Atlas');
});

mongoose.connection.on('reconnected', () => {
  console.log('🔄 [MongoDB] Reconnected to MongoDB Atlas');
});

export default connectDB;
