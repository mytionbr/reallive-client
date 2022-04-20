import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../../components/auth/signin/signin.component';
import { SignupComponent } from '../../components/auth/signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from '../../components/auth/form-input/form-input.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AuthComponent,
    FormInputComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
