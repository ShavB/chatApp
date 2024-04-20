import { WebSocket } from "ws";

export class GroupChat{
    public user1: WebSocket;
    public user2: WebSocket;

    constructor(user1: WebSocket, user2: WebSocket){
        this.user1 = user1;
        this.user2 = user2;
    }

    exchangeMessage(data : string){
        
    }

}