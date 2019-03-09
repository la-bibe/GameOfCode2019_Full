import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.css']
})
export class IngameComponent implements OnInit {

  constructor(public gameService: GameService, private router: Router) {
  }

  ngOnInit() {
    if (!this.gameService.playing) {
      this.router.navigateByUrl('/').catch();
    }
  }

}
