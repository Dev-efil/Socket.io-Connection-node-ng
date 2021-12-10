import { Component, OnInit } from '@angular/core';
import { SocketioService } from './service/socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client-Socket';

  constructor(private ioConnect: SocketioService) {}

  ngOnInit() {
    this.ioConnect.socketConnection();
  }
  ngOnDestroy() {
    this.ioConnect.disconnect();
  }
}
