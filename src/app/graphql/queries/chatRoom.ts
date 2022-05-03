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

export const FIND_CHAT_ROOM_WITH_MESSAGES = gql`
query FindChatRoomWithMessages($chatRoomId: String!, $currentUserId: String!) {
  findChatRoomWithMessages(chatRoomId: $chatRoomId, currentUserId: $currentUserId)
  {
    id createdAt img title type updatedAt usersId 
    messages {
      id content chatRoomId createdAt received userId viewed
    }
  }
}
`