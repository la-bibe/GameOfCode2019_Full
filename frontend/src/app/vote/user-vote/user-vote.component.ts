import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef, ViewRef} from '@angular/core';
import {FashionDrawComponent} from '../../fashion-week-component/fashion-draw/fashion-draw.component';
import {GameService} from '../../../services/game.service';

@Component({
  selector: 'app-user-vote',
  templateUrl: './user-vote.component.html',
  styleUrls: ['./user-vote.component.css']
})
export class UserVoteComponent implements OnInit {

  @Input() proposition: any;

  @ViewChild('display', {read: ViewContainerRef}) display: ViewContainerRef;

  private games = {
    'fashion': FashionDrawComponent
  };

  constructor(public gameService: GameService, private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.display.clear();
    const t = this.resolver.resolveComponentFactory(this.games[this.gameService.game]);
    const c = this.display.createComponent(t);
    // @ts-ignore
    c.instance.setData(this.proposition.proposition);
  }

}
