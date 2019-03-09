import {Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {GameService} from '../../services/game.service';
import {FashionWeekComponent} from '../fashion-week-component/fashion-week.component';
import {BoardGameComponent} from '../board-game/board-game.component';
import {RacletteComponent} from '../raclette/raclette.component';

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.css']
})
export class IngameComponent implements OnInit {

  private container;

  @ViewChild('game', {read: ViewContainerRef}) set gameContainer(container: ElementRef) {
    this.container = container;
  }

  private games = {
    'fashion': FashionWeekComponent,
    'board': BoardGameComponent,
    'raclette': RacletteComponent
  };

  private game;

  constructor(public gameService: GameService, private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.gameService.gameLaunchEmitter.subscribe(game => {
      this.container.clear();
      const fact = this.resolver.resolveComponentFactory(this.games[game.name]);
      this.game = this.container.createComponent(fact).instance;
    });
    this.gameService.changeStateEmitter.subscribe(state => {
      if (state !== 'game') {
        this.container.clear();
      }
    });
  }

  public submitWork() {
    this.gameService.submit(this.game.getData());
  }

}
