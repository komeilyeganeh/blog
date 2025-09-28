import mongoose, { Document } from "mongoose"

export interface IPost extends Document {
    title: string;
    content: string;
    author: mongoose.Types.ObjectId,
    tags: string[];
    published: boolean;
    coverImage?: string;
    readTime: number;
}