import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;

  constructor(private location: Location) {}

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
    console.log(this.postForm.valid);

    console.log(this.postForm.value);
  }

  goBack() {
    this.location.back();
  }
}
