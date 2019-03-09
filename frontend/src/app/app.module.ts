import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FashionWeekComponent} from './fashion-week-component/fashion-week.component';
import {SpectateComponent} from './spectate/spectate.component';
import {UserComponent} from './user/user.component';
import {OrderByScorePipe} from './order-by-score.pipe';
import {FashionDrawComponent} from './fashion-week-component/fashion-draw/fashion-draw.component';
import {CanvasComponent} from './board-game/canvas.component';
import {BoardGameComponent} from './board-game/board-game.component';
import {IngameComponent} from './ingame/ingame.component';
import {ReactionMenuComponent} from './reaction-menu/reaction-menu.component';
import {ReactionComponent} from './reaction/reaction.component';
import {HttpClientModule} from '@angular/common/http';
import {ArrowComponent} from './fashion-week-component/left-arrow/arrow.component';
import { RacletteComponent } from './raclette/raclette.component';
import {DndModule} from 'ngx-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FashionWeekComponent,
    FashionDrawComponent,
    ArrowComponent,
    SpectateComponent,
    UserComponent,
    OrderByScorePipe,
    IngameComponent,
    ReactionMenuComponent,
    ReactionComponent,
    FashionDrawComponent,
    OrderByScorePipe,
    BoardGameComponent,
    CanvasComponent,
    RacletteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
