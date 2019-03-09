import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/user-model';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: UserModel;

  @Input() rank: number;

  constructor(public gameService: GameService) {
  }

  ngOnInit() {
  }

}
