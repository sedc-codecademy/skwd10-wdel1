import { Router } from "express";
import { PostsController } from "../controllers/posts.controller.js";

export const postsRouter = Router();

postsRouter.get("/", PostsController.getAllPosts);
