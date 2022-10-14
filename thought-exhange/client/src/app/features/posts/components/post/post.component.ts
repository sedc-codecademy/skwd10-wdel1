import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Post, SelectedPost } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post | SelectedPost;
  @Input() isHoverShadow: boolean = false;
  @Input() isEditAllowed: boolean = false;

  constructor(private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {}

  onPostSelect() {
    this.router.navigate(['posts', this.post._id]);
  }

  onPostLike(event: Event) {
    event.stopImmediatePropagation();

    this.postsService.likePost(this.post._id);
  }

  onPostDislike(event: Event) {
    event.stopImmediatePropagation();

    this.postsService.dislikePost(this.post._id);
  }

  onPostEdit(event: Event) {
    event.stopImmediatePropagation();
    this.postsService.setPostToEdit(this.post as Post);
  }

  onPostDelete(event: Event) {
    event.stopImmediatePropagation();
    this.postsService.deletePost(this.post._id);
  }
}
