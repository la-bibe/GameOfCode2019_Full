import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
<<<<<<< HEAD
import { FashionWeekComponentComponent } from './fashion-week-component/fashion-week-component.component';
import { FashionScrollComponent } from './fashion-week-component/fashion-scroll/fashion-scroll.component';
import {SpectateComponent} from './spectate/spectate.component';
import {UserComponent} from './user/user.component';
import { OrderByScorePipe } from './order-by-score.pipe';
=======
import { BoardGameComponent } from './board-game/board-game.component';
>>>>>>> faudil

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
<<<<<<< HEAD
    FashionWeekComponentComponent,
    FashionScrollComponent,
    LoginComponent,
    SpectateComponent,
    UserComponent,
    OrderByScorePipe
=======
    BoardGameComponent
>>>>>>> faudil
  ],
  imports: [
    BrowserModule,
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
