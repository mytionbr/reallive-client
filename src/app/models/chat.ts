export type Chat = {
  id: string;
  title: string;
  type: string;
  img: string;
  lastMessages?: {
    viewed: boolean;
    count: number;
    lastMessage: {
      content: string;
      user: {
        name: string;
      };
      updatedAt: string;
    };
  };
};

export enum ChatType {
  SINGLE = "SINGLE" ,
  GROUP = "GROUP",
}

export interface CreateChatInput {
  usersId: string[];
  type: ChatType;
}

export interface CreateChatOutput {
  createdAt: string;
  id: string;
  img?: string;
  title?: string;
  updatedAt: string;
  usersId: string[];
  type: string;
}