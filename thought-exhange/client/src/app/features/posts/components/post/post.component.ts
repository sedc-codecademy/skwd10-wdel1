import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post, SelectedPost } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post | SelectedPost;
  @Input() isHoverShadow: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onPostSelect() {
    this.router.navigate(['posts', this.post._id]);
  }
}
