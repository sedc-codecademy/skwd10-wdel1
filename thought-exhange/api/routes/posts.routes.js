import { Router } from "express";
import { PostsController } from "../controllers/posts.controller.js";

export const postsRouter = Router();

// 1. Get all posts
postsRouter.get("/", PostsController.getAllPosts);
// 2. Get post by id
postsRouter.get("/:id", PostsController.getPostById);
// 3. Create post
postsRouter.post("/", PostsController.createPost);
// 4. Update post
postsRouter.put("/:id", PostsController.updatePost);
// 5. Delete post
postsRouter.delete("/:id", PostsController.deletePost);
