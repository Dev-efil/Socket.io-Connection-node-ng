import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket: any;

  constructor() { }

  // Setup a socket connection
  socketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    // Emit the event named 'my message' to send this message to server
    this.socket.emit('my message', 'Hello from client ng');

    this.socket.on('my broadcast', (data: string) => {
      console.log(data);
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
