import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from 'src/app/components/auth/signin/signin.component';
import { SignupComponent } from 'src/app/components/auth/signup/signup.component';
import { ValidateEmailComponent } from 'src/app/components/auth/validate-email/validate-email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "verifyEmail",
    component: ValidateEmailComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
