import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormStyleService } from '../auth-form-style.service';
import { LoginUserInput } from '../../../models/user';
import { TokenService } from 'src/app/services/token.service';
import { MutationResult } from 'apollo-angular';
import { Router } from '@angular/router';
import { IErrorFormField } from 'src/app/common/IError';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  errors = '';
  loginForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

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

  ngOnInit(): void {
  }

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
    this.loading = true;
    this.errors = ''

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
    this.clearForm();
    this.errors = err.message
  }

  successHandler(result: MutationResult) {
    const userInfo = result.data.login;
    if(userInfo){
      this.tokenService.storeToken(userInfo);
      this.clearForm();
      this.errors = ""
      this.router.navigate(['app'])
    }
  }

  onChange(event: Event) {
    this.authFormStyleService.handleInputChange(event);
  }

  checkErrorPassword(): IErrorFormField[] {
    const errors: IErrorFormField[] = [
      {
        isValid: this.verifyValidRequired('password'),
        message: 'A senha é obrigatória'
      }
    ]

    return errors;
  }

  checkErrorEmail(): IErrorFormField[] {
    const errors: IErrorFormField[] = [
      {
        isValid: this.verifyValidRequired('email'),
        message: 'O e-mail é obrigatório'
      },
      {
        isValid: this.verifyValidEmail(),
        message: 'E-mail inválido'
      },
    ]

    return errors;
  }


  clearForm(){
    this.loading = false;
    this.submitted = false;
    this.loginForm.reset()
  }
}
