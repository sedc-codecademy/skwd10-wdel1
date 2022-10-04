import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostFormComponent } from './components/post-form/post-form.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostComponent,
    PostDetailsComponent,
    CommentsListComponent,
    CommentFormComponent,
    PostFormComponent,
  ],
  imports: [CommonModule, PostsRoutingModule, ReactiveFormsModule],
})
export class PostsModule {}
