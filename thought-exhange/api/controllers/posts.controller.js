import { PostsService } from "../services/posts.service.js";

export class PostsController {
  // 1. Get all posts
  static async getAllPosts(req, res) {
    try {
      const posts = await PostsService.getAllPosts();

      return res.status(200).send(posts);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  // 2. Get post by id
  static async getPostById(req, res) {
    try {
      const postId = req.params.id;

      const post = await PostsService.getPostById(postId);

      console.log(post);

      res.send(post);
    } catch (error) {
      res.status(404).send(error);
    }
  }
  // 3. Create post
  static async createPost(req, res) {
    try {
      const postData = req.body;

      const createdPost = await PostsService.createPost(postData);

      res.status(201).send(createdPost);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // 4. Update post
  static async updatePost(req, res) {
    try {
      const postId = req.params.id;
      const updateData = req.body;

      const updatedPost = await PostsService.updatePost(postId, updateData);

      res.status(200).send(updatedPost);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // 5. Delete post
  static async deletePost(req, res) {
    try {
      const postId = req.params.id;

      await PostsService.deletePost(postId);

      res.sendStatus(204);
    } catch (error) {
      res.status(404).send(error);
    }
  }
}
