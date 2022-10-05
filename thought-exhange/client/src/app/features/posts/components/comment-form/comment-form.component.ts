import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
  commentForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.commentForm = new FormGroup({
      body: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  onFormSubmit() {
    console.log(this.commentForm.value);
  }
}
