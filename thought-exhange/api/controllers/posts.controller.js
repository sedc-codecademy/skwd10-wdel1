import { PostsService } from "../services/posts.service.js";

export class PostsController {
  // 1. Get all posts
  static async getAllPosts(req, res, next) {
    try {
      const posts = await PostsService.getAllPosts();

      return res.status(200).send(posts);
    } catch (error) {
      next(error);
    }
  }
  // 2. Get post by id
  static async getPostById(req, res, next) {
    try {
      const postId = req.params.id;

      const post = await PostsService.getPostById(postId);

      res.send(post);
    } catch (error) {
      next(error);
    }
  }
  // 3. Create post
  static async createPost(req, res, next) {
    try {
      const user = req.user;

      const postData = req.body;

      const createdPost = await PostsService.createPost(user, postData);

      res.status(201).send(createdPost);
    } catch (error) {
      next(error);
    }
  }
  // 4. Update post
  static async updatePost(req, res, next) {
    try {
      const user = req.user;

      const postId = req.params.id;
      const updateData = req.body;

      await PostsService.updatePost(user, postId, updateData);

      res.status(204);
    } catch (error) {
      next(error);
    }
  }
  // 5. Delete post
  static async deletePost(req, res, next) {
    try {
      const user = req.user;

      const postId = req.params.id;

      await PostsService.deletePost(user, postId);

      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
  // 6. Like Post
  static async likePost(req, res, next) {
    try {
      const postId = req.params.id;

      const likeCount = await PostsService.likePost(postId);

      res.status(200).send(likeCount);
    } catch (error) {
      next(error);
    }
  }
  // 7. Dislike Post
  static async dislikePost(req, res, next) {
    try {
      const postId = req.params.id;

      const dislikeCount = await PostsService.dislikePost(postId);

      res.status(200).send(dislikeCount);
    } catch (error) {
      next(error);
    }
  }
}
