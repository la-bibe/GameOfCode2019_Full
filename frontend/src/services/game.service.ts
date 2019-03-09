import {Injectable} from '@angular/core';
import {SocketService} from './socket.service';
import {UserModel} from '../models/user-model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  playing: boolean;
  spectating: boolean;

  id: number;
  name: string;

  // @ts-ignore
  players: Array<UserModel> = [];

  player: UserModel;

  messageEmitter: Subject<any>;

  constructor(private socketService: SocketService) {

    this.messageEmitter = new Subject();

    socketService.initSocket();

    socketService.on('newPlayer', (data) => this.onNewPlayer(data));
    socketService.on('playerLeave', (data) => this.onPlayerLeave(data));
    socketService.on('welcome', (data) => this.onWelcome(data));
    socketService.on('message', (data => this.onMessage(data)));
  }

  private onNewPlayer(playerData) {
    this.players.push(playerData);
    console.log('ID = ' + playerData.id + ' <> ' + this.id);
    if (playerData.id === this.id) {
      this.player = playerData;
    } else {
      this.emotePlayer(playerData.id, 'alert');
    }
  }

  private onWelcome(tournamentData) {
    this.players = tournamentData.tournament.players.data;
    this.id = tournamentData.self.id;
    this.name = tournamentData.self.name;
  }

  private onPlayerLeave(playerData) {
    this.players = this.players.filter(p => p.id !== playerData.id);
  }

  private onMessage(message: string) {
    this.messageEmitter.next(message);
  }

  play() {
    this.socketService.send('playerJoin');
    this.playing = true;
  }

  spectate() {
    this.socketService.send('voterJoin');
    this.spectating = true;
  }

  message(message: string) {
    this.socketService.send('message', {message: message});
  }

  getPlayerById(id: number) {
    return this.players.find(p => p.id === id);
  }

  emotePlayer(id: number, emote: string, timeout: number = 1500) {
    const p = this.getPlayerById(id);
    p.emote = emote;
    setTimeout(() => {
      p.emote = null;
    }, timeout);
  }
}
