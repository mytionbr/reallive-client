import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MutationResult } from 'apollo-angular';
import { RegisterUserInput } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormStyleService } from '../auth-form-style.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  errors = '';
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private authFormStyleService: AuthFormStyleService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      nickname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get registerFormControl() {
    return this.registerForm.controls;
  }

  verifyValidRequired(property: string) {
    return (
     ( this.registerFormControl[property].touched ||
      this.submitted) &&
      this.registerFormControl[property].errors?.['required']
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      const userInput: RegisterUserInput = {
        nickname: this.registerFormControl['nickname'].value,
        email: this.registerFormControl['email'].value,
        password: this.registerFormControl['password'].value,
      };

      const result = this.authService.register(userInput);

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
   const success = result.data.register;
   if(success){
     alert('cadastro realizado com sucesso. Verifique o seu e-mail para validá-lo')
    this.registerForm.reset()
  }
   console.log(result)
  }

  onChange(event: Event) {
    this.authFormStyleService.handleInputChange(event);
  }

  checkError(fieldName: string): ()=> boolean {
    return ()=> this.verifyValidRequired(fieldName);
  }
}
