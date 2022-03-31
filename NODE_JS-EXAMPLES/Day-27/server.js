const express = require('express');
const http = require('http');
const path = require('path');
const uaparser = require('ua-parser')

const app = express();

const server = http.createServer(app);

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname+"/public")));

io.on("connection", (socket) => {
  socket.on("newuser", (username) => {
    socket.broadcast.emit("update", username + "joined the conversation");
  });
  socket.on("exituser", (username) => {
    socket.broadcast.emit("update", username + "left the conversation");
  });
  socket.on("chat", (message) => {
    socket.broadcast.emit("chat", message);
  });
});

server.listen(5000);

