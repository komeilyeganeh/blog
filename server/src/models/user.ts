import mongoose from "mongoose";
import { IUser } from "../types/user.interface";

// :::: user schema ::::
const userSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    maxLength: 500,
  },
  profilePic: {
    type: String,
  },
});

export default mongoose.model("User", userSchema);
