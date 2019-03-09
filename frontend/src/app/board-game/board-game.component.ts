import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CanvasComponent} from './canvas/canvas.component';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.css']
})
export class BoardGameComponent implements OnInit {
  @ViewChild('canvas') public canvas: ElementRef;

  public word = '';

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.word = this.gameService.seed['word'];
  }

  getData() {
    // @ts-ignore
    return this.canvas.getData();
  }
}
