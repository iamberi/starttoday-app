import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonComponent } from './buttons/button/button.component';
import { ButtonIconComponent } from './buttons/button-icon/button-icon.component';
import { InputTextComponent } from './input/input-text/input-text.component';
import { FormDividerComponent } from './input/form-divider/form-divider.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ProblemeComponent } from './views/probleme/probleme.component';
import { ChallengesComponent } from './views/challenges/challenges.component';
import { ProfilComponent } from './views/profil/profil.component';
import { CardProblemeComponent } from './card-probleme/card-probleme.component';
import { CardChallengeComponent } from './card-challenge/card-challenge.component';
import { ChallengesDetailComponent } from './challenges-detail/challenges-detail.component';

//Liste aller Routes
const routes: Routes = [
  { path: 'challenges-detail', component: ChallengesDetailComponent },
  { path: 'probleme', component: ProblemeComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '', redirectTo: '/probleme', pathMatch: 'full'},
  { path: 'problemerstellen', component: ProblemErstellenComponent },

]

//Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ProblemErstellenComponent } from './views/problem/problem-erstellen/problem-erstellen.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavigationComponent,
    ButtonIconComponent,
    InputTextComponent,
    FormDividerComponent,
    ProblemeComponent,
    ChallengesComponent,
    ProfilComponent,
    CardProblemeComponent,
    CardChallengeComponent,
    ChallengesDetailComponent,
    ProblemErstellenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, //imports firebase/firestore, only needed for database features
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
