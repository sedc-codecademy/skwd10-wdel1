import { UsersService } from "../services/users.service.js";

export class UsersController {
  // 1. Get posts by user
  static async getPostsByUser(req, res, next) {
    try {
      const user = req.user;

      const posts = await UsersService.getPostsByUser(user);
      res.status(200).send(posts);
    } catch (error) {
      next(error);
    }
  }
  // 2. Get comments by user
  static async getCommentsByUser(req, res, next) {
    try {
      const user = req.user;

      const comments = await UsersService.getCommentsByUser(user);
      res.status(200).send(comments);
    } catch (error) {
      next(error);
    }
  }
}
