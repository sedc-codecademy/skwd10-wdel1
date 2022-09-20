import { PostsService } from "../services/posts.service.js";

export class PostsController {
  static async getAllPosts(req, res) {
    const posts = await PostsService.getAllPosts();

    return res.status(200).send(posts);
  }
}
