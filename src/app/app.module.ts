import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// models
import { Challenge } from './models/challenge.model';
// components
import { ButtonComponent } from './components/buttons/button/button.component';
import { ButtonIconComponent } from './components/buttons/button-icon/button-icon.component';
import { InputTextComponent } from './components/input/input-text/input-text.component';
import { CardProblemeComponent } from './components/card-probleme/card-probleme.component';
import { CardChallengeComponent } from './components/card-challenge/card-challenge.component';
import { FormDividerComponent } from './components/form-divider/form-divider.component';
// views
import { ProfilComponent } from './views/profil/profil.component';
import { RegisterNComponent } from './views/register-n/register-n.component';
// challenges
import { ChallengesComponent } from './views/challenges/challenges.component';
import { ChallengesDetailComponent } from './challenges-detail/challenges-detail.component';
// probleme
import { ProblemeComponent } from './views/problem/probleme/probleme.component';
// import { ProblemErstellenComponent } from './views/problem/problem-erstellen/problem-erstellen.component';
import { ProblemDetailComponent } from './views/problem/problem-detail/problem-detail.component';
import { ProblemDeleteComponent } from './views/problem/problem-delete/problem-delete.component';
import { ProblemBearbeitenComponent } from './views/problem/problem-bearbeiten/problem-bearbeiten.component';
// CRUD
import { CreateProblemComponent } from './create-problem/create-problem.component';
import { ListProblemComponent } from './list-problem/list-problem.component';
import { EditProblemComponent } from './views/problem/edit-problem/edit-problem.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';
import { ListChallengeComponent } from './list-challenge/list-challenge.component';
import { EditChallengeComponent } from './edit-challenge/edit-challenge.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// Galerie
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//NGX Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { WillkommenComponent } from './views/willkommen/willkommen.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { FirebaseService } from './services/firebase.service';
import { LoggedInStartComponent } from './views/logged-in-start/logged-in-start.component';
import { ErrorComponent } from './views/error/error.component';

import { WillkommenNComponent } from './views/willkommen-n/willkommen-n.component';
import { LoginNComponent } from './views/login-n/login-n.component';
import { TestPasswortComponent } from './test-passwort/test-passwort.component';
import { OverviewComponent } from './views/overview/overview.component';
import { RegularButtonComponent } from './components/buttons/regular-button/regular-button.component';
import { DropdownComponent } from './components/buttons/dropdown/dropdown.component';
import { DeleteProblemComponent } from './views/problem/delete-problem/delete-problem.component';
import { CommentsComponent } from './components/comments/comments.component';
import { GalleryNComponent } from './gallery-n/gallery-n.component';
import { DeleteChallengeComponent } from './views/delete-challenge/delete-challenge.component';
import { AddSolutionComponent } from './views/problem/add-solution/add-solution.component';


// Liste aller Routes
const routes: Routes = [
  { path: '', component: WillkommenNComponent },
  { path: 'willkommen', component: WillkommenComponent },
  { path: 'register-n', component: RegisterNComponent },
  { path: 'challenges-detail', component: ChallengesDetailComponent },
  { path: 'probleme', component: ProblemeComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logged-in-start', component: LoggedInStartComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/willkommen-n', pathMatch: 'full'},

  { path: 'register-n', component: RegisterNComponent },
  { path: 'willkommen-n', component: WillkommenNComponent},
  { path: 'login-n', component: LoginNComponent},

  { path: 'create-problem', component: CreateProblemComponent },
  { path: 'list-problems', component: ListProblemComponent },
  { path: 'update-problem/:id', component: EditProblemComponent },
  { path: 'edit-problem', component: EditProblemComponent },
  { path: 'delete-problem', component: DeleteProblemComponent },
  { path: 'delete-problem/:id', component: DeleteProblemComponent },
  { path: 'add-solution', component: AddSolutionComponent},



  { path: 'create-challenge', component: CreateChallengeComponent },
  { path: 'list-challenges', component: ListChallengeComponent },
  { path: 'update-challenge/:id', component: EditChallengeComponent },
  { path: '', redirectTo: '/willkommen-n', pathMatch: 'full'},
  { path: 'problem-erstellen', component: ProblemBearbeitenComponent },
  { path: 'problem-detail', component: ProblemDetailComponent },
  { path: 'problem-delete', component: ProblemDeleteComponent },
  { path: 'problem-bearbeiten', component: ProblemBearbeitenComponent },
  { path: 'challenges-detail', component: ChallengesDetailComponent },
  { path: 'delete-challenge', component: DeleteChallengeComponent },
  { path: 'edit-challenge', component: EditChallengeComponent },


  { path: 'overview', component: OverviewComponent },


];




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
    WillkommenComponent,
    LoginComponent,
    RegisterComponent,
    LoggedInStartComponent,
    ErrorComponent,
    CardChallengeComponent,
    ChallengesDetailComponent,
    ProblemBearbeitenComponent,
    ProblemDetailComponent,
    ProblemDeleteComponent,
    RegisterNComponent,
    WillkommenNComponent,
    LoginNComponent,
    TestPasswortComponent,
    CreateProblemComponent,
    ListProblemComponent,
    EditProblemComponent,
    CreateChallengeComponent,
    ListChallengeComponent,
    EditChallengeComponent,
    OverviewComponent,
    RegularButtonComponent,
    DropdownComponent,
    DeleteProblemComponent,
    CommentsComponent,
    GalleryNComponent,
    DeleteChallengeComponent,
    AddSolutionComponent,
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
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
  // exports: [ RouterModule ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
