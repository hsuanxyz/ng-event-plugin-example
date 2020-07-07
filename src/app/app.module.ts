import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ResizeObserverEventPluginModule } from 'resize-observer-event-plugin';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResizeObserverEventPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
