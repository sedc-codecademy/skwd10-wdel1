import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { Post, SelectedPost } from '../interfaces/post.interface';
import { environment } from 'src/environments/environment';

const { API_URL } = environment;

const postsDummyData = [
  {
    _id: '6335d94562b62c62c7ef4078',
    title: 'Third post by second user',
    body: 'Lorem ipsum sin dolor.',
    likes: 0,
    dislikes: 0,
    author: {
      _id: '6335d91d62b62c62c7ef406b',
      username: 'seconduser',
    },
    comments: [],
    createdAt: '2022-09-29T17:43:33.778Z',
    updatedAt: '2022-09-29T17:43:33.778Z',
    __v: 0,
  },
  {
    _id: '6335c49360bdc40e41871a6f',
    title: 'Third Post',
    body: 'Lorem ipsum sin dolor.',
    likes: 0,
    dislikes: 0,
    author: {
      _id: '6335bd610e43f4fd5d8c548b',
      username: 'firstuser',
    },
    comments: [],
    createdAt: '2022-09-29T16:15:15.676Z',
    updatedAt: '2022-09-29T16:15:15.676Z',
    __v: 0,
  },
  {
    _id: '6335d42bba726edb98563714',
    title: 'Sixth Post',
    body: 'Lorem ipsum sin dolor.',
    likes: 0,
    dislikes: 0,
    author: {
      _id: '6335bd610e43f4fd5d8c548b',
      username: 'firstuser',
    },
    comments: [],
    createdAt: '2022-09-29T17:21:47.389Z',
    updatedAt: '2022-09-29T17:21:47.389Z',
    __v: 0,
  },
  {
    _id: '6335d42eba726edb98563718',
    title: 'Seventh Post',
    body: 'Lorem ipsum sin dolor.',
    likes: 0,
    dislikes: 0,
    author: {
      _id: '6335bd610e43f4fd5d8c548b',
      username: 'firstuser',
    },
    comments: [],
    createdAt: '2022-09-29T17:21:50.897Z',
    updatedAt: '2022-09-29T17:21:50.897Z',
    __v: 0,
  },
  {
    _id: '6335d94262b62c62c7ef4074',
    title: 'Second post by second user',
    body: 'Lorem ipsum sin dolor.',
    likes: 0,
    dislikes: 0,
    author: {
      _id: '6335d91d62b62c62c7ef406b',
      username: 'seconduser',
    },
    comments: [],
    createdAt: '2022-09-29T17:43:30.329Z',
    updatedAt: '2022-09-29T17:43:30.329Z',
    __v: 0,
  },
  {
    _id: '6335bfaa9a29e461466bc54c',
    title: 'Second Post',
    body: 'Lorem ipsum sin dolor.',
    likes: 0,
    dislikes: 0,
    author: {
      _id: '6335bd610e43f4fd5d8c548b',
      username: 'firstuser',
    },
    comments: [],
    createdAt: '2022-09-29T15:54:18.877Z',
    updatedAt: '2022-09-29T15:54:18.877Z',
    __v: 0,
  },
  {
    _id: '6335bfb39a29e461466bc554',
    title: 'Forth post (updated)',
    body: 'Updated with new keys logic',
    likes: 0,
    dislikes: 0,
    author: {
      _id: '6335bd610e43f4fd5d8c548b',
      username: 'firstuser',
    },
    comments: [],
    createdAt: '2022-09-29T15:54:27.453Z',
    updatedAt: '2022-09-29T16:07:30.749Z',
    __v: 0,
  },
  {
    _id: '6335d93e62b62c62c7ef4070',
    title: 'First post by second user',
    body: 'Lorem ipsum sin dolor.',
    likes: 0,
    dislikes: 0,
    author: {
      _id: '6335d91d62b62c62c7ef406b',
      username: 'seconduser',
    },
    comments: [],
    createdAt: '2022-09-29T17:43:26.410Z',
    updatedAt: '2022-09-29T17:43:26.410Z',
    __v: 0,
  },
  {
    _id: '6335bf489a29e461466bc548',
    title: 'First Post',
    body: 'Lorem ipsum sin dolor.',
    likes: 6,
    dislikes: 5,
    author: {
      _id: '6335bd610e43f4fd5d8c548b',
      username: 'firstuser',
    },
    comments: [
      '6335d17530250041442959cb',
      '6335d21ecb419597d52054e1',
      '6335d26ccb419597d52054ef',
      '6335d97862b62c62c7ef4088',
      '6335d98062b62c62c7ef4092',
    ],
    createdAt: '2022-09-29T15:52:40.440Z',
    updatedAt: '2022-09-29T17:44:32.633Z',
    __v: 5,
  },
  {
    _id: '6335d427ba726edb98563710',
    title: 'Fifth Post',
    body: 'Lorem ipsum sin dolor.',
    likes: 0,
    dislikes: 0,
    author: {
      _id: '6335bd610e43f4fd5d8c548b',
      username: 'firstuser',
    },
    comments: [],
    createdAt: '2022-09-29T17:21:44.005Z',
    updatedAt: '2022-09-29T17:21:44.005Z',
    __v: 0,
  },
];

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts$ = new BehaviorSubject<Post[]>([]);

  selectedPost$ = new Subject<SelectedPost>();

  constructor(private http: HttpClient) {
    console.log(this.posts$.value);
  }

  // 1.Get all posts
  getAllPosts() {
    this.http
      .get(`${API_URL}/posts`)
      .pipe(map((value) => value as Post[]))
      .subscribe({
        next: (posts) => {
          this.posts$.next(posts);
        },
        error: (err) => console.log(err),
      });
  }

  getPostById(postId: string) {
    this.http
      .get(`${API_URL}/posts/${postId}`)
      .pipe(map((value) => value as SelectedPost))
      .subscribe({
        next: (post) => {
          this.selectedPost$.next(post);
        },
        error: (err) => console.log(err),
      });
  }
}
