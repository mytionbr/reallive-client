import { gql } from "apollo-angular";

export const REGISTER = gql`
  mutation Register($nickname: String!, $password: String!, $email: String!) {
    register(data: { nickname: $nickname, password: $password, email: $email })
  }
`;

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(data: { email: $email, password: $password }){
          token
        }
    }
`
export const CONFIRM_EMAIL = gql`
  mutation VerifyEmail($code: String!, $userId: String!) {
    verifyEmail(data: { code: $code, userId: $userId})
  }
`