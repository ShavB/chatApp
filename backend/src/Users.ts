import { v4 as uuidv4 } from "uuid";
import WebSocket, { WebSocketServer } from "ws";

export class Users {
  private Users: WebSocket[];
  constructor() {
    this.Users = [];
  }

  createUser(socket: WebSocket, WebSocket: WebSocketServer) {
    this.Users.push(socket);
    this.sendUserMessage(socket, WebSocket);
  }

  RemoveUserId(socket: WebSocket) {
    this.Users = this.Users.filter((Users) => Users !== socket);
  }

  sendUserMessage(socket: WebSocket, WebSocket: WebSocketServer) {
    socket.on("message", function message(data, isBinary) {
      WebSocket.clients.forEach(function each(client) {
        if (client !== socket && client.readyState === socket.OPEN) {
          client.send(data, { binary: isBinary });
        }
      });
    });
  }
}
