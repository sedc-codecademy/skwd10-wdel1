import { CommentService } from "../services/comments.service.js";

export class CommentsController {
  // Get all comments
  static async getAllComments(req, res, next) {
    try {
      const comments = await CommentService.getAllComments();

      res.status(200).send(comments);
    } catch (error) {
      next(error);
    }
  }
  // 1. Create a comment
  static async createComment(req, res, next) {
    try {
      const user = req.user;
      const commentData = req.body;

      const createdComment = await CommentService.createComment(
        user,
        commentData
      );

      res.status(201).send(createdComment);
    } catch (error) {
      next(error);
    }
  }
}
