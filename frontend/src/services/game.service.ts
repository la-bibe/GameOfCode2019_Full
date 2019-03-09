import {Injectable} from '@angular/core';
import {SocketService} from './socket.service';
import {UserModel} from '../models/user-model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  playing: boolean;
  spectating: boolean;

  game: string;

  size: number;

  id: number;
  name: string;

  state: string;

  seed = {};

  // @ts-ignore
  players: Array<UserModel> = [];

  player: UserModel;

  timeLeft: number;

  messageEmitter: Subject<any>;
  gameLaunchEmitter: Subject<any>;
  changeStateEmitter: Subject<any>;

  propositions = [];

  constructor(private socketService: SocketService) {

    this.messageEmitter = new Subject<any>();
    this.gameLaunchEmitter = new Subject<any>();
    this.changeStateEmitter = new Subject<any>();

    socketService.initSocket();

    socketService.on('newPlayer', (data) => this.onNewPlayer(data));
    socketService.on('playerLeave', (data) => this.onPlayerLeave(data));
    socketService.on('welcome', (data) => this.onWelcome(data));
    socketService.on('message', (data) => this.onMessage(data));
    socketService.on('launchGame', (data) => this.onLaunchGame(data));
    socketService.on('changeState', (data) => this.onChangeState(data));
    socketService.on('timeLeft', (data) => this.onTimeLeft(data));
    socketService.on('propositions', (data) => {
      this.propositions = data;
    });
    socketService.on('updatePlayerRanking', (data) => {
      this.players = data;
    });
    socketService.on('playerAnswered', (data) => {
      this.emotePlayer(data.player.id, 'idea');
    });
    this.socketService.on('error', (data) => {
      this.playing = false;
      this.spectating = false;
      this.state = null;
      this.game = null;
      this.timeLeft = null;
      this.players = [];
      this.player = null;
      this.propositions = [];
    });
  }

  private onTimeLeft(data) {
    this.timeLeft = data.value;
  }

  private onNewPlayer(playerData) {
    this.players.push(playerData);
    if (playerData.id === this.id) {
      this.player = playerData;
    } else {
      this.emotePlayer(playerData.id, 'alert');
    }
  }

  private onChangeState(state) {
    this.state = state.state;
    this.changeStateEmitter.next(state.state);
  }

  private onWelcome(tournamentData) {
    this.players = tournamentData.tournament.players;
    this.size = tournamentData.tournament.size;
    this.state = tournamentData.tournament.state;
    if (tournamentData.tournament.game) {
      this.game = tournamentData.tournament.game.name;
    }
    this.id = tournamentData.self.id;
    this.name = tournamentData.self.name;
  }

  private onPlayerLeave(playerData) {
    this.players = this.players.filter(p => p.id !== playerData.id);
  }

  private onMessage(message) {
    this.messageEmitter.next(message);
  }

  private onLaunchGame(data) {
    this.game = data.name;
    this.seed = data.seed;
    this.gameLaunchEmitter.next(data);
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

  submit(data: any = {}) {
    this.socketService.send('play', {data: data});
    this.state = 'waiting';
  }

  vote(id: number) {
    this.socketService.send('vote', {id: id});
    this.state = 'waiting';
  }
}
