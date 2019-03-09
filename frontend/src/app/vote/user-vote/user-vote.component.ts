import {Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {FashionDrawComponent} from '../../fashion-week-component/fashion-draw/fashion-draw.component';
import {GameService} from '../../../services/game.service';
import {CanvasComponent} from '../../board-game/canvas/canvas.component';
import {BoardDisplayComponent} from '../../board-game/board-display/board-display.component';

@Component({
  selector: 'app-user-vote',
  templateUrl: './user-vote.component.html',
  styleUrls: ['./user-vote.component.css']
})
export class UserVoteComponent implements OnInit {

  @Input() proposition: any;

  @Output() vote: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('display', {read: ViewContainerRef}) display: ViewContainerRef;

  private games = {
    'fashion': FashionDrawComponent,
    'board': BoardDisplayComponent
  };

  constructor(public gameService: GameService, private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.display.clear();
    const t = this.resolver.resolveComponentFactory(this.games[this.gameService.game]);
    const c = this.display.createComponent(t);
    // @ts-ignore
    c.instance.setData(this.proposition.proposition);
    c.instance.style.display = 'block';
  }

}
