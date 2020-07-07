import { Injectable } from '@angular/core';
import { EventManager } from "@angular/platform-browser";
import ResizeObserver from 'resize-observer-polyfill';

const EVENT_NAME = 'resizeObserver';

@Injectable({
  providedIn: 'root'
})
export class ResizeObserverEventPlugin  {

  manager!: EventManager;

  supports(eventName: string): boolean {
    return eventName === EVENT_NAME;
  }

  addEventListener(element: HTMLElement, _eventName: string, handler: (entry: ResizeObserverEntry[]) => void): Function {
    const zone = this.manager.getZone();

    return zone.runOutsideAngular(() => {
      const resizeObserver = new ResizeObserver((entries => {
        zone.runGuarded(() => {
          handler(entries);
        });
      }));
      resizeObserver.observe(element);

      return () => {
        resizeObserver.unobserve(element);
      }
    })

  }
}
