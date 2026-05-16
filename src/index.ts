import express from "express";
import dotenv from "dotenv";
import { connectMongoDB } from "./config/mongoDb.js";
import studentRoutes from "./routes/studentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import prismaDB from "./config/prismaDb.js";

const app = express();
dotenv.config();

const startServer = async () => {
  try {
    // MongoDB connection
    await connectMongoDB();

    // Prisma connection
    await prismaDB.$connect();
    console.log("PostgreSQL Connected");

    app.use(express.json());

    app.use("/", studentRoutes);
    app.use("/admin", adminRoutes);

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start:", error);
    process.exit(1);
  }
};

startServer();
