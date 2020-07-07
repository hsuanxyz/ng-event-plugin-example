import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  size: string = ''
  handler(event: any) {
    const entry = event[0] as ResizeObserverEntry;
    this.size = `${entry.contentRect.width} * ${entry.contentRect.height}`
  }
}
