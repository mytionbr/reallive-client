import { gql } from "apollo-angular";

export const CREATE_CHAT_ROOM = gql`
  mutation CreateChatRoom($usersId: String[]!, $type: String!) {
    createChatRoom(data: { usersId: $usersId, type: $type  })
  }
`;