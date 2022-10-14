import { Component, Input, OnInit } from '@angular/core';
import { PostComment } from 'src/app/interfaces/comment.interface';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent {
  @Input() comments: PostComment[] = [];
  @Input() showPostLink: boolean = false;
}
