import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  get posts$() {
    return this.postsService.posts$;
  }

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getAllPosts();
  }
}
