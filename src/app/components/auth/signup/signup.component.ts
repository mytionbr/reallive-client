import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MutationResult } from 'apollo-angular';
import { IErrorFormField } from 'src/app/common/IError';
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

  checkErrorEmail(): IErrorFormField[] {
    const errors: IErrorFormField[] = [
      {
        isValid: this.verifyValidRequired('email'),
        message: 'O e-mail é obrigatório'
      },
    ]

    return errors;
  }
  checkErrorNickname(): IErrorFormField[] {
    const errors: IErrorFormField[] = [
      {
        isValid: this.verifyValidRequired('nickname'),
        message: 'O apelido é obrigatório'
      },
    ]

    return errors;
  }

  checkErrorPassword(): IErrorFormField[] {
    const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
    const value = this.registerFormControl['confirmPassword'].value
    const errors: IErrorFormField[] = [
      {
        isValid: this.verifyValidRequired('password'),
        message: 'A senha é obrigatória'
      },
      {
        isValid: this.registerFormControl['password'].dirty && !regex.test(value),
        message: 'A senha deve ter pelo menos 8 caracteres, 1 letra maiuscula, 1 letra minuscula e um simbolo especial'
      },
    ]

    return errors;
  }

  checkErrorConfirmPassword(): IErrorFormField[] {
    const errors: IErrorFormField[] = [
      {
        isValid: this.verifyValidRequired('confirmPassword'),
        message: 'A senha de confirmação é obrigatória'
      },
      {
        isValid: this.registerFormControl['confirmPassword'].dirty && this.registerFormControl['password'].value !== this.registerFormControl['confirmPassword'].value ,
        message: 'As senhas são diferentes'
      },
    ]

    return errors;
  }

}
