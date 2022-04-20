import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormStyleService } from '../auth-form-style.service';
import { LoginUserInput } from '../../../models/user';
import { TokenService } from 'src/app/services/token.service';
import { MutationResult } from 'apollo-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  errors = '';
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private authFormStyleService: AuthFormStyleService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get loginFormControl() {
    return this.loginForm.controls;
  }

  verifyValidRequired(property: string) {
    return (
     ( this.loginFormControl[property].touched ||
      this.submitted) &&
      this.loginFormControl[property].errors?.['required']
    );
  }

  verifyValidEmail() {
    return (
      this.loginFormControl['email'].touched &&
      this.loginFormControl['email'].dirty &&
      this.loginFormControl['email'].errors?.['email']
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      const userInput: LoginUserInput = {
        email: this.loginFormControl['email'].value,
        password: this.loginFormControl['password'].value,
      };

      const result = this.authService.login(userInput);

      result.subscribe({
        next: (result) => this.successHandler(result),
        error: (err) => this.errorHanlder(err),
      });
    }
  }

  errorHanlder(err: any) {
    console.log(err);
  }

  successHandler(result: MutationResult) {
    const token = result.data.login.token;
    console.log(token);
    if(token){
      this.tokenService.storeToken(token);
      this.router.navigate(['/app'])
    }
  }

  onChange(event: Event) {
    this.authFormStyleService.handleInputChange(event);
  }

  checkError(fieldName: string): ()=> boolean {
    return ()=> this.verifyValidRequired(fieldName);
  }
}
