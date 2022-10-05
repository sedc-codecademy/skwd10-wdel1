import { PostComment } from './comment.interface';

export interface Post {
  _id: string;
  title: string;
  body: string;
  likes: number;
  dislikes: number;
  author: {
    _id: string;
    username: string;
  };
  comments: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface SelectedPost {
  _id: string;
  title: string;
  body: string;
  likes: number;
  dislikes: number;
  author: {
    _id: string;
    username: string;
  };
  comments: PostComment[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
