const express = require('express');
const socket = require('socket.io');

// Server setup
const server = express();
const PORT = process.env.PORT || 3000;

const app = server.listen(PORT, () => console.log(`Server started on port : ${PORT}`));

// Socket.io setup
const io = socket(app);

io.on('connection', function(socket) {
    console.log('Made a Socket connection');
});