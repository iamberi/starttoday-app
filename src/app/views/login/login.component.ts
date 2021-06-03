import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSignedIn = false;
  constructor
    (
    public FirebaseService: FirebaseService,
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
      this.isSignedIn = true
      else
      this.isSignedIn = false
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
