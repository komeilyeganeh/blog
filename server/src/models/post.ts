import mongoose, { Schema } from "mongoose";
import { IPost } from "../types/post.interface";

// :::: post schema ::::
const postSchema = new mongoose.Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [{ type: String }],
    published: {
      type: Boolean,
      default: false,
    },
    coverImage: {
      type: String,
    },
    readTime: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postSchema);
