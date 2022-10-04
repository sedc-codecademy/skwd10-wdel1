import { Component, OnInit } from '@angular/core';
import { SelectedPost } from 'src/app/interfaces/post.interface';

const postDetailsMockData = {
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
    {
      _id: '6335d17530250041442959cb',
      body: 'First comment on first post',
      author: {
        _id: '6335bd610e43f4fd5d8c548b',
        username: 'firstuser',
      },
      post: '6335bf489a29e461466bc548',
      createdAt: '2022-09-29T17:10:13.641Z',
      updatedAt: '2022-09-29T17:10:13.641Z',
      __v: 0,
    },
    {
      _id: '6335d21ecb419597d52054e1',
      body: 'Second comment on first post',
      author: {
        _id: '6335bd610e43f4fd5d8c548b',
        username: 'firstuser',
      },
      post: '6335bf489a29e461466bc548',
      createdAt: '2022-09-29T17:13:02.422Z',
      updatedAt: '2022-09-29T17:13:02.422Z',
      __v: 0,
    },
    {
      _id: '6335d26ccb419597d52054ef',
      body: 'Third comment on first post',
      author: {
        _id: '6335bd610e43f4fd5d8c548b',
        username: 'firstuser',
      },
      post: '6335bf489a29e461466bc548',
      createdAt: '2022-09-29T17:14:20.784Z',
      updatedAt: '2022-09-29T17:14:20.784Z',
      __v: 0,
    },
    {
      _id: '6335d97862b62c62c7ef4088',
      body: 'Comment from second user',
      author: {
        _id: '6335d91d62b62c62c7ef406b',
        username: 'seconduser',
      },
      post: '6335bf489a29e461466bc548',
      createdAt: '2022-09-29T17:44:24.398Z',
      updatedAt: '2022-09-29T17:44:24.398Z',
      __v: 0,
    },
    {
      _id: '6335d98062b62c62c7ef4092',
      body: 'This is a great post',
      author: {
        _id: '6335d91d62b62c62c7ef406b',
        username: 'seconduser',
      },
      post: '6335bf489a29e461466bc548',
      createdAt: '2022-09-29T17:44:32.578Z',
      updatedAt: '2022-09-29T17:44:32.578Z',
      __v: 0,
    },
  ],
  createdAt: '2022-09-29T15:52:40.440Z',
  updatedAt: '2022-09-29T17:44:32.633Z',
  __v: 5,
};

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  post: SelectedPost = postDetailsMockData;

  constructor() {}

  ngOnInit(): void {}
}
