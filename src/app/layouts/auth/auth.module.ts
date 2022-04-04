import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../../components/auth/signin/signin.component';
import { SignupComponent } from '../../components/auth/signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
