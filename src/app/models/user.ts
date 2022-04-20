export interface RegisterUserInput {
    nickname: string;
    email: string;
    password: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}