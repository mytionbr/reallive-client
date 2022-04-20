import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { LOGIN, REGISTER } from '../graphql/mutations/auth';
import { LoginUserInput, RegisterUserInput } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apollo: Apollo) {}

  getAll() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            findAll {
              id
              nickname
              email
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
      });
  }

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
  
}
