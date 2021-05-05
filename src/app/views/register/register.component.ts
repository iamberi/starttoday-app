import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isSignedIn = false;
  constructor(
    public FirebaseService : FirebaseService,
    private _router: Router,
    private _activatedRoute : ActivatedRoute) { }

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
