import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-reaction-menu',
  templateUrl: './reaction-menu.component.html',
  styleUrls: ['./reaction-menu.component.css']
})
export class ReactionMenuComponent implements OnInit {

  open: boolean;

  types = [
    'bear',
    'chick',
    'elephant',
    'zebra'
  ];

  constructor(public gameService: GameService) {
  }

  ngOnInit() {
  }

}
