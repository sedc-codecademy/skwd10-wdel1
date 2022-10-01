import { BadRequest, GeneralError, NotFound } from "../const/error.const.js";
import { Post } from "../models/post.model.js";
export class PostsService {
  // 1. Get all posts
  static async getAllPosts() {
    try {
      const posts = await Post.find({}).populate("author", "username").sort({
        title: "desc", //"asc", "1" , "-1"
      });

      return posts;
    } catch (error) {
      throw new GeneralError(`Couldn't fetch posts, ERROR: ${error}`);
    }
  }
  // 2. Get post by id
  static async getPostById(postId) {
    try {
      const foundPost = await Post.findById(postId)
        .populate("author", "username")
        .populate({
          path: "comments",
          populate: {
            path: "author",
            select: "username",
          },
        });

      if (!foundPost) throw "Post not found";

      return foundPost;
    } catch (error) {
      throw new NotFound(`Couldn't fetch post, ERROR: ${error}`);
    }
  }
  // 3. Create post
  static async createPost(user, postData) {
    try {
      const { title, body } = postData;

      const post = new Post({ title, body, author: user._id });

      const createdPost = await post.save();

      user.posts.push(createdPost._id);

      await user.save();

      return createdPost;
    } catch (error) {
      throw new BadRequest(`Couldn't create post, ERROR: ${error}`);
    }
  }
  //4. Update post
  static async updatePost(user, postId, updateData) {
    try {
      const post = await Post.findOne({ _id: postId, author: user._id });

      if (!post) throw "Post not found";

      const allowedUpdates = ["title", "body"];

      const updateKeys = Object.keys(updateData);

      updateKeys.forEach(key => {
        if (allowedUpdates.includes(key)) {
          post[key] = updateData[key];
        }
      });
      await post.save();

      // post.title = updateData.title;
      // post.body = updateData.body;
    } catch (error) {
      console.log(error);
      throw new BadRequest(`Couldn't update post, ERROR: ${error}`);
    }
  }
  // Delete Post
  static async deletePost(user, postId) {
    try {
      const deletedPost = await Post.findOneAndDelete({
        _id: postId,
        author: user._id,
      });

      //Making sure references list is updated with each deletion
      user.posts = user.posts.filter(postId => deletedPost._id !== postId);

      if (!deletedPost) throw "Post not found!";
    } catch (error) {
      throw new NotFound(`Couldn't delete post, ERROR: ${error}`);
    }
  }
  // 6. Like Post
  static async likePost(postId) {
    try {
      const post = await this.getPostById(postId);

      post.likes += 1;

      const updatedPost = await post.save();

      return { likes: updatedPost.likes };
    } catch (error) {
      throw new BadRequest(`Couldn't like post, ERROR: ${error}`);
    }
  }

  // 7. Dislike Post
  static async dislikePost(postId) {
    try {
      const post = await this.getPostById(postId);

      post.dislikes += 1;

      const updatedPost = await post.save();

      return { dislikes: updatedPost.dislikes };
    } catch (error) {
      throw new BadRequest(`Couldn't dislike post, ERROR: ${error}`);
    }
  }
}
