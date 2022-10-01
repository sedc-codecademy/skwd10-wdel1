import { Router } from "express";
import { CommentsController } from "../controllers/comments.controller.js";

export const commentsRouter = Router();

// Get all comments
commentsRouter.get("/", CommentsController.getAllComments);
// 1. Create comment
commentsRouter.post("/", CommentsController.createComment);
