import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss'],
})
export class UserCommentsComponent implements OnInit {
  currentUser: LoggedInUser | null;

  get userComments$() {
    return this.postsService.userComments$;
  }

  constructor(
    private postsService: PostsService,
    private authService: AuthService
  ) {
    this.currentUser = authService.currentUser$.value;
  }

  ngOnInit(): void {
    this.postsService.getCommentsByUser();
  }
}
