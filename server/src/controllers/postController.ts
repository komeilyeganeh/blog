import { Request, Response } from "express";
import Post from "../models/post";

interface CreatePostRequestBody {
  title: string;
  content: string;
  tags?: string[];
  published?: boolean;
  coverImage?: string;
  readTime?: number;
}

export class PostController {
  // :::: new post function ::::
  static async createPost(req: Request, res: Response): Promise<Response> {
    try {
      const {
        title,
        content,
        tags,
        published,
        coverImage,
        readTime,
      }: CreatePostRequestBody = req.body;
      if (!title?.trim() || !content?.trim()) {
        return res.status(400).json({
          message: "Title and content are required",
        });
      }
      if (title.length < 5) {
        return res.status(400).json({
          message: "Title must be at least 5 characters",
        });
      }
      const newPost = await Post.create({
        title: title.trim(),
        content: content.trim(),
        author: req?.user?.userId,
        tags: tags || [],
        published: published || false,
        coverImage: coverImage || "",
      });

      await newPost.populate("author", "username name profilePic");
      const author = newPost.author as any;
      return res.status(201).json({
        message: "Post created successfully",
        post: {
          id: newPost._id,
          title: newPost.title,
          content: newPost.content,
          author: {
            id: author._id,
            username: author.username,
            name: author.name,
            profilePicture: author.profilePic || "",
          },
          tags: newPost.tags,
          published: newPost.published,
          coverImage: newPost.coverImage,
          readTime: newPost.readTime,
        },
      });
    } catch (err) {
      console.error("Create post error:", err);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }
}
