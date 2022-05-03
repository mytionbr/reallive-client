import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { CONFIRM_EMAIL, LOGIN, REGISTER } from '../graphql/mutations/auth';
import { VerifyEmailInput, LoginUserInput, RegisterUserInput } from '../models/user';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apollo: Apollo, private tokenService: TokenService, private router: Router) {}

  register(registerUserInput: RegisterUserInput ) {
    const { nickname, password, email } = registerUserInput;
    const result = this.apollo.mutate({
      mutation: REGISTER,
      variables: { nickname, password, email}
    });
    return result;
  }

  login(loginUserInput: LoginUserInput){
    const { email, password } = loginUserInput;
    const result = this.apollo.mutate({
      mutation: LOGIN,
      variables: { email, password }
    })
    return result;
  }

  verifyEmail(verifyEmailInput: VerifyEmailInput){
    const { code, userId } = verifyEmailInput;
    const result = this.apollo.mutate({
      mutation: CONFIRM_EMAIL,
      variables: { code, userId }
    })
    return result;
  }

  isAuthenticated(): boolean{
    return !!this.tokenService.getToken();
  }
  
  getUserId(): string | undefined {
    const userInfo = this.tokenService.getToken();
    const currentUserId = userInfo?.userId;
    return currentUserId;
  }
}
