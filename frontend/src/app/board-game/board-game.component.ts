import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.css']
})
export class BoardGameComponent implements OnInit {
 private word_list = ['montains', 'T-shirt', 'glasses', 'bag', 'knife', 'bottle', 'cat', 'snake'];
 public word = '';
  ngOnInit() {
    this.word = this.word_list[Math.floor(Math.random() * 100) % this.word_list.length];
  }

}