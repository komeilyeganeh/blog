import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./src/routes/auth";

dotenv.config();

// :::: express app ::::
const app = express();

app.use(cors());
app.use(express.json());

// :::: list of routes ::::
app.use("/api/auth/", authRoutes);

// :::: connection to mongoDB ::::
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!).then(() => {
      console.log("Connected to mongoDB");
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server running on port ${PORT}`);
});
