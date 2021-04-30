import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ButtonComponent } from './buttons/button/button.component';
import { ButtonIconComponent } from './buttons/button-icon/button-icon.component';
import { InputTextComponent } from './input/input-text/input-text.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonIconComponent,
    InputTextComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
