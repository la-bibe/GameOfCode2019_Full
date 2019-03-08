import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {SpectateComponent} from './spectate/spectate.component';
import {UserComponent} from './user/user.component';
import { OrderByScorePipe } from './order-by-score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    LoginComponent,
    SpectateComponent,
    UserComponent,
    OrderByScorePipe
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
