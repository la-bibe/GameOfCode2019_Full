import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SpectateComponent} from './spectate/spectate.component';
import {UserComponent} from './user/user.component';
import {OrderByScorePipe} from './order-by-score.pipe';
import {IngameComponent} from './ingame/ingame.component';
import {ReactionMenuComponent} from './reaction-menu/reaction-menu.component';
import {ReactionComponent} from './reaction/reaction.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    SpectateComponent,
    UserComponent,
    OrderByScorePipe,
    IngameComponent,
    ReactionMenuComponent,
    ReactionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
