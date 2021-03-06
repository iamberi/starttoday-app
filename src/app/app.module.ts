import { ChallengeService } from './services/challenge.service';
import { ProblemService } from './services/problem.service';
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

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseService } from './services/firebase.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
// components
import { ButtonComponent } from './components/buttons/button/button.component';
import { ButtonIconComponent } from './components/buttons/button-icon/button-icon.component';
import { InputTextComponent } from './components/input/input-text/input-text.component';
import { CardProblemeComponent } from './components/card-probleme/card-probleme.component';
import { CardChallengeComponent } from './components/card-challenge/card-challenge.component';
import { FormDividerComponent } from './components/form-divider/form-divider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// views
import { ProfilComponent } from './views/profil/profil.component';
import { LoggedInStartComponent } from './views/logged-in-start/logged-in-start.component';
import { ErrorComponent } from './views/error/error.component';
import { WillkommenNComponent } from './views/willkommen-n/willkommen-n.component';
import { OverviewComponent } from './views/overview/overview.component';
import { RegularButtonComponent } from './components/buttons/regular-button/regular-button.component';
import { DropdownComponent } from './components/buttons/dropdown/dropdown.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AddSolutionComponent } from './probleme/add-solution/add-solution.component';
import { ImpressumComponent } from './views/impressum/impressum.component';

// Profil
import { ProfilUnternehmenComponent } from './views/profil/profil-unternehmen/profil-unternehmen.component';
import { ProfilPrivatpersonComponent } from './views/profil/profil-privatperson/profil-privatperson.component';
import { BevorstehendeChallengesComponent } from './views/profil/bevorstehende-challenges/bevorstehende-challenges.component';
import { VergangeneChallengesComponent } from './views/profil/vergangene-challenges/vergangene-challenges.component';
import { EingereichteProblemeComponent } from './views/profil/eingereichte-probleme/eingereichte-probleme.component';
import { GeloesteProblemeComponent } from './views/profil/geloeste-probleme/geloeste-probleme.component';
import { BevorstehendeChallengesPComponent } from './views/profil/bevorstehende-challenges-p/bevorstehende-challenges-p.component';


// challenges
import { ChallengesComponent } from './challenges/challenges.component';
import { ChallengesDetailComponent } from './challenges/challenge-detail/challenge-detail.component';
import { CreateChallengeComponent } from './challenges/create-challenge/create-challenge.component';
import { ListChallengeComponent } from './challenges/list-challenge/list-challenge.component';
import { EditChallengeComponent } from './challenges/edit-challenge/edit-challenge.component';
import { DeleteChallengeComponent } from './challenges/delete-challenge/delete-challenge.component';

// probleme
import { ProblemeComponent } from './probleme/probleme.component';
import { ProblemDetailComponent } from './probleme/problem-detail/problem-detail.component';
import { ProblemDeleteComponent } from './probleme/problem-delete/problem-delete.component';
import { ProblemBearbeitenComponent } from './probleme/problem-bearbeiten/problem-bearbeiten.component';
import { CreateProblemComponent } from './probleme/create-problem/create-problem.component';
import { ListProblemComponent } from './probleme/list-problem/list-problem.component';
import { DeleteProblemComponent } from './probleme/delete-problem/delete-problem.component';
import { EditProblemComponent } from './probleme/edit-problem/edit-problem.component';

// other stuff
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AddContentComponent } from './components/add-content/add-content.component';

import { VerifizierungComponent } from './views/profil/verifizierung/verifizierung.component';

import { FaqComponent } from './views/faq/faq.component';



//Refactoring Login a la tutorial
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from "./shared/guard/auth.guard";
// Auth service
import { AuthService } from './shared/services/auth.service';

// Liste aller Routes
const routes: Routes = [
  { path: '', component: WillkommenNComponent },
  { path: 'probleme', component: ProblemeComponent, canActivate: [AuthGuard] },
  { path: 'challenges', component: ChallengesComponent, canActivate: [AuthGuard]  },
  { path: 'profil', component:  ProfilUnternehmenComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logged-in-start', component: LoggedInStartComponent},

  //Refactoring Login a la tutorial
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/willkommen-n', pathMatch: 'full'},

  { path: 'willkommen', component: WillkommenNComponent},

  { path: 'create-problem', component: CreateProblemComponent, canActivate: [AuthGuard]  },
  { path: 'list-problems', component: ListProblemComponent, canActivate: [AuthGuard]  },
  { path: 'update-problem/:id', component: EditProblemComponent, canActivate: [AuthGuard]  },
  { path: 'edit-problem', component: EditProblemComponent, canActivate: [AuthGuard]  },
  { path: 'delete-problem', component: DeleteProblemComponent, canActivate: [AuthGuard]  },
  { path: 'delete-problem/:id', component: DeleteProblemComponent, canActivate: [AuthGuard]  },
  { path: 'add-solution', component: AddSolutionComponent, canActivate: [AuthGuard] },



  { path: 'create-challenge', component: CreateChallengeComponent, canActivate: [AuthGuard]  },
  { path: 'list-challenges', component: ListChallengeComponent, canActivate: [AuthGuard]  },
  { path: 'update-challenge/:id', component: EditChallengeComponent, canActivate: [AuthGuard]  },

  { path: 'problem-erstellen', component: ProblemBearbeitenComponent, canActivate: [AuthGuard] },
  { path: 'problem-detail/:id', component: ProblemDetailComponent, canActivate: [AuthGuard] },
  { path: 'problem-delete', component: ProblemDeleteComponent, canActivate: [AuthGuard] },
  { path: 'problem-bearbeiten', component: ProblemBearbeitenComponent, canActivate: [AuthGuard] },
  { path: 'challenge-detail/:id', component: ChallengesDetailComponent, canActivate: [AuthGuard] },
  { path: 'delete-challenge', component: DeleteChallengeComponent, canActivate: [AuthGuard] },
  { path: 'edit-challenge', component: EditChallengeComponent, canActivate: [AuthGuard] },

  { path: 'faq', component: FaqComponent, canActivate: [AuthGuard] },

  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },

  { path: 'impressum', component: ImpressumComponent, canActivate: [AuthGuard] },

  //Profilansicht
  { path: 'profil/unternehmen', component: ProfilUnternehmenComponent, canActivate: [AuthGuard] },
  { path: 'profil/privatperson', component: ProfilPrivatpersonComponent , canActivate: [AuthGuard]},
  { path: 'bevorstehende-challenges', component: BevorstehendeChallengesComponent, canActivate: [AuthGuard] },
  { path: 'vergangene-challenges', component: VergangeneChallengesComponent, canActivate: [AuthGuard] },
  { path: 'meine-challenges', component: BevorstehendeChallengesPComponent, canActivate: [AuthGuard] },
  { path: 'geloeste-probleme', component: GeloesteProblemeComponent, canActivate: [AuthGuard] },
  { path: 'eingereichte-probleme', component: EingereichteProblemeComponent, canActivate: [AuthGuard] },
  { path: 'verifizierung', component: VerifizierungComponent , canActivate: [AuthGuard]},



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
    LoginComponent,
    RegisterComponent,
    LoggedInStartComponent,
    ErrorComponent,
    CardChallengeComponent,
    ChallengesDetailComponent,
    ProblemBearbeitenComponent,
    ProblemDetailComponent,
    ProblemDeleteComponent,
    WillkommenNComponent,
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
    DeleteChallengeComponent,
    AddSolutionComponent,

    ForgotPasswordComponent,
    VerifyEmailComponent,

    AddContentComponent,
    ImpressumComponent,
    ProfilUnternehmenComponent,
    ProfilPrivatpersonComponent,
    BevorstehendeChallengesComponent,
    VergangeneChallengesComponent,
    EingereichteProblemeComponent,
    GeloesteProblemeComponent,
    BevorstehendeChallengesPComponent,
    VerifizierungComponent,
    FaqComponent,
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  // exports: [ RouterModule ],
  providers:
  [ FirebaseService,
    AuthService,
    ProblemService,
    ChallengeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
