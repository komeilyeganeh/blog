import express from "express";
import { auth } from "../middleware/auth";
import { PostController } from "../controllers/postController";

const router = express.Router();

router.post("/newPost", auth, PostController.createPost);

export default router;