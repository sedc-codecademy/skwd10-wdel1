import { BadRequest, GeneralError } from "../const/error.const.js";
import { Comment } from "../models/comment.model.js";
import { PostsService } from "./posts.service.js";

export class CommentService {
  // Get all comments
  static async getAllComments() {
    try {
      const comments = await Comment.find({});

      return comments;
    } catch (error) {
      throw new GeneralError(`Couldn't fetch comments, ERROR ${error}`);
    }
  }

  // 1. Create a comment
  static async createComment(user, commentData) {
    try {
      const post = await PostsService.getPostById(commentData.post);

      const comment = new Comment({ ...commentData, author: user._id });

      const createdComment = await comment.save();

      post.comments.push(createdComment._id);

      user.comments.push(createdComment._id);

      await post.save();

      await user.save();

      return createdComment;
    } catch (error) {
      throw new BadRequest(`Couldn't create comment, ERROR: ${error}`);
    }
  }
}
