import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI : string = process.env.MONGO_URI || '';

const connectDB = async () => {
  try{
    mongoose.connect(MONGO_URI)
      .then(() => console.log('✅ Connected to MongoDB via Mongoose'))
      .catch((err) => console.error('❌ Mongoose connection error:', err));
    console.log('✅ MongoDB connection established');
  }
  catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};


export default connectDB;
