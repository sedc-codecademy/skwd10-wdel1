import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, SelectedPost } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  get selectedPost$() {
    return this.postsService.selectedPost$;
  }

  ngOnInit(): void {
    const postId = this.route.snapshot.params.id;
    this.postsService.getPostById(postId);
  }
}
