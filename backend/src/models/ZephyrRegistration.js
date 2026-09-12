import mongoose from 'mongoose';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+0-9\s\-()]{7,20}$/;

const zephyrRegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      match: [emailRegex, 'Please provide a valid email address']
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [phoneRegex, 'Please provide a valid phone number']
    },
    college: {
      type: String,
      required: [true, 'College / Institution name is required'],
      trim: true,
      maxlength: [200, 'College name cannot exceed 200 characters']
    },
    department: {
      type: String,
      default: 'General Engineering',
      trim: true
    },
    year: {
      type: String,
      default: 'Second Year (SE)',
      trim: true
    },
    track: {
      type: String,
      required: [true, 'Competition track is required'],
      trim: true
    },
    registrationId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    }
  },
  {
    collection: 'zephyr_registrations',
    timestamps: true
  }
);

// Compound unique index: A participant cannot register for the same track multiple times with the same email
zephyrRegistrationSchema.index({ email: 1, track: 1 }, { unique: true });

export const ZephyrRegistration = mongoose.model('ZephyrRegistration', zephyrRegistrationSchema);
export default ZephyrRegistration;
