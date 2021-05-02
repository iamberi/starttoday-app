import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonComponent } from './buttons/button/button.component';
import { ButtonIconComponent } from './buttons/button-icon/button-icon.component';
import { InputTextComponent } from './input/input-text/input-text.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ProblemeComponent } from './views/probleme/probleme.component';
import { ChallengesComponent } from './views/challenges/challenges.component';
import { ProfilComponent } from './views/profil/profil.component';

//Liste aller Routes
const routes: Routes = [
  { path: 'probleme', component: ProblemeComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '', redirectTo: '/probleme', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavigationComponent,
    ButtonIconComponent,
    InputTextComponent,
    ProblemeComponent,
    ChallengesComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
