import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board-display',
  templateUrl: './board-display.component.html',
  styleUrls: ['./board-display.component.css']
})
export class BoardDisplayComponent implements OnInit {

  data: string;

  constructor() {
  }

  ngOnInit() {
  }

  setData(data) {
    this.data = data[0];
  }

}
