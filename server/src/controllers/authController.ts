import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/user";
import { generateToken } from "../utils/jwt";

export class AuthController {
    // :::: register function ::::
  static async register(req: Request, res: Response) {
    const { username, email, password, name, bio, profilePic } = req.body;
    if (!(username || email || password)) {
      return res.status(400).json("Inputs Are Required!");
    }
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json("User Already Exists!");
    }

    // :::: create new user ::::
    try {
      const newUser = await User.create({
        username,
        email,
        name,
        bio,
        profilePic,
        password: bcrypt.hashSync(password, 12),
      });
      const token = generateToken(String(newUser._id));
      return res.status(201).json({
        message: "User Created Successfully!",
        token,
        user: {
          id: newUser?._id,
          username: newUser?.username,
          email: newUser?.email,
          name: newUser?.name,
        },
      });
    } catch (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // :::: login function ::::
  static async login(req: Request, res:Response) {
    const { username, password } = req.body;
    if (!(username?.trim() || password)) {
      return res.status(400).json({ message: "Username and password are required!" });
    }
    const user = await User.findOne({ username });
    if (!user)
      return res.status(404).json({ message: "User Not Found!" });
    const isPasswordValid = await bcrypt.compare(password, user?.password);
    if (isPasswordValid) {
      return res.status(200).json({
        message: "Login Successfull!",
        token: generateToken(String(user._id)),
        user: {
          id: user?._id,
          username: user?.username,
          email: user?.email,
          name: user?.name,
        },
      });
    }
    return res.status(401).json({ message: "Invalid Credentials!" });
  }
}
