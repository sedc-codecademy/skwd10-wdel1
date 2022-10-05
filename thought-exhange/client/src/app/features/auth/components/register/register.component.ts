import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup(
      {
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
      },
      this.confirmPasswordValidator
    );
  }

  confirmPasswordValidator = (formGroup: any) => {
    if (
      formGroup.controls['password'].value !==
      formGroup.controls['confirmPassword'].value
    ) {
      // negative validatio, need to return an object like the one below
      return { passwordMismatch: true };
    } else {
      // positive validation you need to return null
      return null;
    }
  };

  onFormSubmit() {}
}
