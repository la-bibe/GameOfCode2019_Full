import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {

  constructor(public gameService: GameService) {
  }

  ngOnInit() {
  }

}
