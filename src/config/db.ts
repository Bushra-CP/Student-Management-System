import mongoose from "mongoose";


export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.error("MONGODB_URI missing in .env file");
    process.exit(1);
  }

  await mongoose.connect(mongoUri);
  console.log("MongoDB Connected");
};