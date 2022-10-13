import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggedInUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  currentUser: LoggedInUser | null = null;

  get posts$() {
    return this.postsService.posts$;
  }

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    if (this.route.routeConfig?.path === 'user') {
      this.currentUser = this.authService.currentUser$.value;
    }
  }

  ngOnInit(): void {
    if (this.currentUser) {
      // When on posts by user page
      this.postsService.getPostsByUser();
    } else {
      this.postsService.getAllPosts();
    }
  }
}
