import { gql } from "apollo-angular";

export const FIND_CHAT_ROOMS = gql`
query FindChatRooms($userId: String!) {
  findAllChatRoomsByUserId(userId: $userId)
 {
  id img title type createdAt updatedAt usersId lastMessages{
    count viewed lastMessage {
      content 
      updatedAt 
      user {
        nickname
      }
    }
  }
 }
}
`