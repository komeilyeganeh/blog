import express from "express";
import { auth } from "../middleware/auth"
import { AuthController } from "../controllers/authController";

const router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/me", auth);

export default router;