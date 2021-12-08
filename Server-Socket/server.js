const express = require('express');
const socket = require('socket.io');

// Server setup
const server = express();
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server started on port : ${PORT}`));
