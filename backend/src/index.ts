import { WebSocketServer } from "ws";
import { Users } from "./Users";

const wss = new WebSocketServer({ port: 8080 });
const users = new Users();

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  users.createUser(ws, wss);

  ws.on("close", () => users.RemoveUserId(ws));
});
