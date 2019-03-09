import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Output() output: EventEmitter<any> = new EventEmitter<any>();

  constructor(public gameService: GameService) {
  }

  ngOnInit() {
  }

}
