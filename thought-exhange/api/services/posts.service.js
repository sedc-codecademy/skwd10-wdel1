import { BadRequest, GeneralError, NotFound } from "../const/error.const.js";
import { Post } from "../models/post.model.js";
export class PostsService {
  // 1. Get all posts
  static async getAllPosts() {
    try {
      const posts = await Post.find({});

      return posts;
    } catch (error) {
      throw new GeneralError(`Couldn't fetch posts, ERROR: ${error}`);
    }
  }
  // 2. Get post by id
  static async getPostById(postId) {
    try {
      const foundPost = await Post.findById(postId);

      if (!foundPost) throw "Post not found";

      return foundPost;
    } catch (error) {
      throw new NotFound(`Couldn't fetch post, ERROR: ${error}`);
    }
  }
  // 3. Create post
  static async createPost(postData) {
    try {
      const post = new Post(postData);

      const createdPost = await post.save();

      return createdPost;
    } catch (error) {
      throw new BadRequest(`Couldn't create post, ERROR: ${error}`);
    }
  }
  //4. Update post
  static async updatePost(postId, updateData) {
    try {
      const post = await Post.findById(postId);

      if (!post) throw "Post not found";

      post.title = updateData.title;
      post.body = updateData.body;

      const updatedPost = await post.save();

      return updatedPost;
    } catch (error) {
      throw new BadRequest(`Couldn't update post, ERROR: ${error}`);
    }
  }
  // Delete Post
  static async deletePost(postId) {
    try {
      const deletedPost = await Post.findByIdAndDelete(postId);

      if (!deletedPost) throw "Post not found!";
    } catch (error) {
      throw new NotFound(`Couldn't delete post, ERROR: ${error}`);
    }
  }
}
