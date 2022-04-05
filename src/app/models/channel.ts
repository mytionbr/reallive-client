export type Channel = {
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