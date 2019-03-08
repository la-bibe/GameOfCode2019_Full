import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {RouterModule} from '@angular/router';
import { FashionWeekComponentComponent } from './fashion-week-component/fashion-week-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FashionWeekComponentComponent
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
