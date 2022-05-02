import { gql } from "apollo-angular";

export const CREATE_CHAT_ROOM = gql`
  mutation CreateChatRoom($usersId: [String!]!, $type: type!) {
    createChatRoom(data: { usersId: $usersId, type: $type  })
    {
     id title img createdAt updatedAt usersId
    }
  }
`;
