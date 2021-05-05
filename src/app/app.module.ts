import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
//components
import { ButtonComponent } from './components/buttons/button/button.component';
import { ButtonIconComponent } from './components/buttons/button-icon/button-icon.component';
import { InputTextComponent } from './components/input/input-text/input-text.component';
import { CardProblemeComponent } from './components/card-probleme/card-probleme.component';
//views
import { ProfilComponent } from './views/profil/profil.component';
import { ChallengesComponent } from './views/challenges/challenges.component';
import { ProblemeComponent } from './views/probleme/probleme.component';
//CRUD
import { CreateProblemComponent } from './create-problem/create-problem.component';
import { ListProblemComponent } from './list-problem/list-problem.component';
import { EditProblemComponent } from './edit-problem/edit-problem.component';
//Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


//Liste aller Routes
const routes: Routes = [
  { path: 'probleme', component: ProblemeComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '', redirectTo: '/probleme', pathMatch: 'full'},
  { path: 'create', component: CreateProblemComponent },
  { path: 'list-problems', component: ListProblemComponent },
  { path: 'update-problem/:id', component: EditProblemComponent }
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
    CardProblemeComponent,
    CreateProblemComponent,
    ListProblemComponent,
    EditProblemComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, //imports firebase/firestore, only needed for database features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
