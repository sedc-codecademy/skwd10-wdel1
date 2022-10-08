import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { PostsService } from 'src/app/services/posts.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;

  constructor(private location: Location, private postsService: PostsService) {}

  ngOnInit(): void {
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
  }

  onFormSubmit() {
    const { title, body } = this.postForm.value;

    this.postsService.createPost(title, body);
  }

  goBack() {
    this.location.back();
  }
}
