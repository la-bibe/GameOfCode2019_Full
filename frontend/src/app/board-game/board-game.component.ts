import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CanvasComponent} from './canvas/canvas.component';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.css']
})
export class BoardGameComponent implements OnInit {
  @ViewChild('canvas') public canvas: ElementRef;

  private word_list = ['montains', 'T-shirt', 'glasses', 'bag', 'knife', 'bottle', 'cat', 'snake'];
  public word = '';

  ngOnInit() {
    this.word = this.word_list[Math.floor(Math.random() * 100) % this.word_list.length];
  }

  getData() {
    return this.canvas.getData();
  }
}
