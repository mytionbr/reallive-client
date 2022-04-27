export type Chat = {
    id: string;
    title: string;
    type: string;
    img: string;
    lastMessages: {
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
}

export enum ChatType {
    SINGLE, GROUP
}

export interface CreateChatInput {
    directUserId: string
    type: ChatType
}