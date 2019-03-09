import {Injectable} from '@angular/core';
import {SocketEvent} from '../models/socket-event';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: WebSocket;

  // @ts-ignore
  private handler: Map<string, ((data: any) => void)[]>;

  constructor() {
    // @ts-ignore
    this.handler = new Map();
  }

  public initSocket() {
    this.socket = new WebSocket(environment.serverUrl);
    this.socket.addEventListener('message', (e) => {
      // @ts-ignore
      const event = JSON.parse(e.data);
      console.log('EVENT: ' + e.data);
      if (this.handler.has(event.type)) {
        this.handler.get(event.type).forEach((handler) => handler(event.payload));
      }
    });
  }

  public send(type: string, payload: any = {}) {
    // @ts-ignore
    this.socket.send(JSON.stringify(new SocketEvent(type, payload)));
  }

  public on(type: string, observer: (data: any) => void) {
    if (!this.handler.has(type)) {
      this.handler.set(type, [observer]);
    } else {
      this.handler.get(type).push(observer);
    }
  }
}
