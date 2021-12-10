const express = require('express');
const cors = require('cors');
const socket = require('socket.io');

// Server setup
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());


const PORT = process.env.PORT || 3000;
const app = server.listen(PORT, () => console.log(`Server started on port : ${PORT}`));

// Socket.io setup
const io = socket(app, {
    cors: {
        origin: 'http://localhost:4200'
    },
});

io.on('connection', function (socket) {
    console.log(`Made a Socket connection : ${socket.id}`);
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
    // Register an event to console the data which coming from Client.
    socket.on('my message', (msg) => {
        console.log('Message : '+ msg);
        // broadcast the event to all connected users
        io.emit('my broadcast', `server: ${msg}`);
    });
});