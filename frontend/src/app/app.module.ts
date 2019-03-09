import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { FashionWeekComponent } from './fashion-week-component/fashion-week.component';
import { FashionScrollComponent } from './fashion-week-component/fashion-scroll/fashion-scroll.component';
import {SpectateComponent} from './spectate/spectate.component';
import {UserComponent} from './user/user.component';
import { OrderByScorePipe } from './order-by-score.pipe';
import {HttpClientModule} from '@angular/common/http';
import { FashionDrawComponent } from './fashion-week-component/fashion-draw/fashion-draw.component';
import { CanvasComponent } from './board-game/canvas.component';
import {BoardGameComponent} from './board-game/board-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FashionWeekComponent,
    FashionScrollComponent,
    LoginComponent,
    SpectateComponent,
    UserComponent,
    OrderByScorePipe,
    FashionDrawComponent,
    OrderByScorePipe,
    BoardGameComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainMenuComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'spectate',
        component: SpectateComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
