import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() isHoverShadow: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
