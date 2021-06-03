import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../services/user';
//Refactoring
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

/*   model = new User (24, '', '', '', '',''); */
  submitted = false;
  isSignedIn = false;

  constructor(
    public FirebaseService : FirebaseService,
    private _router: Router,
    private _activatedRoute : ActivatedRoute,
    public authService: AuthService
    ) { }


 /*  newUser():void {
    this.model = new User(42, '', '', '','', '');
  }

  onSubmit():void {
    this.submitted = true;
    return;
  }

  skyDog(): User {
    const myUser =  new User(42, 'hanna', 'musterfrau', 'info@mail', 'info@mail','password');
    console.log('My hero is called ' + myUser.vorname); // "My hero is called SkyDog"
    return myUser;
  } */

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
      this.isSignedIn = true
      else
      this.isSignedIn = false
  }


  async onSignup(email:string, password:string){
    await this.FirebaseService.signup(email,password)
    if(this.FirebaseService.isLoggedIn)
    this.isSignedIn = true
  }

  handleLogout(){
    this.isSignedIn = false
  }
}
