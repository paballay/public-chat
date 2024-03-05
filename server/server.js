import express from "express";
import loki from "lokijs";
import bodyParser from "body-parser";
import { createServer } from "node:http";
import { Server } from "socket.io";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// open the database file
const db = await open({
  filename: "chat.db",
  driver: sqlite3.Database,
});

// create our 'messages' table (you can ignore the 'client_offset' column for now)
await db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_offset TEXT UNIQUE,
      content TEXT,
      date TEXT,
  );
`);

const db = new loki("chat.db");
const app = express();
const server = createServer(app);

const PORT = 8080;
const BASE_URL = "/chat";

const io = new Server(server);

app.use(bodyParser.urlencoded({ limit: "2000mb", extended: true }));
app.use(bodyParser.json({ limit: "2000mb" }));

server.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
