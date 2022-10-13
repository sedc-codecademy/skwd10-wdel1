import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;

  postToEdit: Post;

  constructor(
    private location: Location,
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (
      this.route.routeConfig?.path === 'edit' &&
      this.postsService.postToEdit$.value
    ) {
      this.postToEdit = this.postsService.postToEdit$.value;
    }
    this.initForm();
  }

  initForm() {
    this.postForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      body: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });

    if (this.postToEdit) {
      this.postForm.setValue({
        title: this.postToEdit.title,
        body: this.postToEdit.body,
      });
    }
  }

  onFormSubmit() {
    const { title, body } = this.postForm.value;

    if (this.postToEdit) {
      this.postsService.updatePost(this.postToEdit._id, title, body);
    } else {
      this.postsService.createPost(title, body);
    }
  }

  goBack() {
    this.location.back();
  }
}
