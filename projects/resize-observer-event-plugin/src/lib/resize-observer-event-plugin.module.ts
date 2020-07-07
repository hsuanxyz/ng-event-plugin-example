import { NgModule } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from "@angular/platform-browser";
import { ResizeObserverEventPlugin } from "./resize-observer-event-plugin.service";

@NgModule({
  providers: [
    {
      multi: true,
      provide: EVENT_MANAGER_PLUGINS,
      useClass: ResizeObserverEventPlugin
    }
  ]
})
export class ResizeObserverEventPluginModule { }
