import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-spectate',
  templateUrl: './spectate.component.html',
  styleUrls: ['./spectate.component.css']
})
export class SpectateComponent implements OnInit {

  reactions: any[] = [];

  constructor(public gameService: GameService) {
    gameService.messageEmitter.subscribe(s => {
      this.reactions.push(s);
      console.log(this.reactions);
    });
  }

  removeReaction(val) {
    this.reactions = this.reactions.filter(r => r !== val);
  }

  ngOnInit() {
  }

}
