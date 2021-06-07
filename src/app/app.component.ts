import { FirebaseService } from './services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { AuthService } from "./shared/services/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'starttoday-app';
  isSignedIn = false

  constructor(
    private afs: AngularFirestore,
    public FirebaseService : FirebaseService,
    public authService: AuthService) {
    }

    ngOnInit(): void {
      if(localStorage.getItem('user')!== null){
      this.isSignedIn = true
      }else{
      this.isSignedIn = false;
      }

    }

    async onSignup(email:string, password:string){
      await this.FirebaseService.signup(email,password)
      if(this.FirebaseService.isLoggedIn)
      this.isSignedIn = true
    }

    async onSignin(email:string, password:string){
      await this.FirebaseService.signin(email,password)
      if(this.FirebaseService.isLoggedIn)
      this.isSignedIn = true
    }

    handleLogout(){
      this.isSignedIn = false
    }
}
