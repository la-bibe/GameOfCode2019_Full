import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../models/user-model';

@Component({
  selector: 'app-spectate',
  templateUrl: './spectate.component.html',
  styleUrls: ['./spectate.component.css']
})
export class SpectateComponent implements OnInit {

  users: UserModel[];

  constructor() {
  }

  ngOnInit() {
    this.users = [
      {
        name: 'Bassintag',
        score: 0
      },
      {
        name: 'Lol',
        score: 1
      },
      {
        name: 'Aled',
        score: 0
      },
      {
        name: 'Jpp',
        score: 0
      },
      {
        name: 'Oskour',
        score: 0
      },
      {
        name: 'ZZZZ',
        score: 0
      },
      {
        name: 'XOXO',
        score: 0
      },
      {
        name: 'MEGALUL',
        score: 0
      },
    ];
  }

}
