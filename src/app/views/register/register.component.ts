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



  isSignedIn = false;

  constructor(
    public FirebaseService : FirebaseService,
    private _router: Router,
    private _activatedRoute : ActivatedRoute,
    public authService: AuthService
    ) { }




  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
      this.isSignedIn = true
      else
      this.isSignedIn = false
  }

  handleLogout(){
    this.isSignedIn = false
  }
}
