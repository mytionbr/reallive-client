export interface RegisterUserInput {
    nickname: string;
    email: string;
    password: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}

export interface VerifyEmailInput {
  code: string;
  userId: string;
}

export interface UserItem {
  id: string;
  name: string;
  image: string;
}

export interface UserInfo {
  token: string;
  userId: string;
}