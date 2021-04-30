import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starttoday-app';

    constructor(swUpdate: SwUpdate) {
    swUpdate.available.subscribe(() => {
    if (confirm('Neue Version verfügbar. Neu laden?')) {
    window.location.reload();
    }
    });
    }
}
