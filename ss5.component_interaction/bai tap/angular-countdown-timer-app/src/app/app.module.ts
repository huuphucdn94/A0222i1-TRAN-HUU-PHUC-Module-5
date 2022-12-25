import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularCountdownTimerComponent } from './angular-countdown-timer/angular-countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularCountdownTimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
