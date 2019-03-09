export class SocketEvent {

  constructor(type: string = null, data: any = null) {
    this.type = type;
    this.payload = data;
  }

  type: string;

  payload: any;
}
