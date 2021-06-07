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


  submitted = false;
  isSignedIn = false;

  constructor(
    public FirebaseService : FirebaseService,
    private _router: Router,
    private _activatedRoute : ActivatedRoute,
    public authService: AuthService
    ) { }


  onSubmit():void {
    this.submitted = true;
    return;
  }

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
