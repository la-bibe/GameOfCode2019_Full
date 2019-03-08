import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {RouterModule} from '@angular/router';
import { BoardGameComponent } from './board-game/board-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    BoardGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainMenuComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
