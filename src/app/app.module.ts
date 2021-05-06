import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

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
import { ProblemeComponent } from './views/problem/probleme/probleme.component';
import { ChallengesComponent } from './views/challenges/challenges.component';
import { ProfilComponent } from './views/profil/profil.component';
import { CardProblemeComponent } from './card-probleme/card-probleme.component';
import { CardChallengeComponent } from './card-challenge/card-challenge.component';
import { ChallengesDetailComponent } from './challenges-detail/challenges-detail.component';
import { ProblemErstellenComponent } from './views/problem/problem-erstellen/problem-erstellen.component';
import { ProblemDetailComponent } from './views/problem/problem-detail/problem-detail.component';
import { ProblemDeleteComponent } from './views/problem/problem-delete/problem-delete.component';
import { ProblemBearbeitenComponent } from './views/problem/problem-bearbeiten/problem-bearbeiten.component';
import { RegisterNComponent } from './views/register-n/register-n.component';


//Liste aller Routes
const routes: Routes = [
  { path: 'register-n', component: RegisterNComponent },
  { path: 'probleme', component: ProblemeComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'willkommen-n', component: WillkommenNComponent},
  { path: 'login-n', component: LoginNComponent},
  { path: 'test', component: TestPasswortComponent},
  { path: '', redirectTo: '/willkommen-n', pathMatch: 'full'},
  { path: 'problem-erstellen', component: ProblemErstellenComponent },
  { path: 'problem-detail', component: ProblemDetailComponent },
  { path: 'problem-delete', component: ProblemDeleteComponent },
  { path: 'problem-bearbeiten', component: ProblemBearbeitenComponent },
  { path: 'challenges-detail', component: ChallengesDetailComponent },
]

//Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { WillkommenNComponent } from './views/willkommen-n/willkommen-n.component';
import { LoginNComponent } from './views/login-n/login-n.component';
import { TestPasswortComponent } from './test-passwort/test-passwort.component';




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
    ProblemDetailComponent,
    ProblemDeleteComponent,
    ProblemBearbeitenComponent,
    RegisterNComponent,
    WillkommenNComponent,
    LoginNComponent,
    TestPasswortComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //ReactiveFormsModule,
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
