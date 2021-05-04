import { Component, OnInit } from '@angular/core';
import { User } from '../../user';


@Component({
  selector: 'app-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model = new User (24, '', '', '', '');

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newUser(){
    this.model = new User(42, '', '', '', '');
  }

  skyDog(): User {
    const myUser =  new User(42, 'hanna', 'musterfrau', 'info@mail', 'password');
    console.log('My hero is called ' + myUser.vorname); // "My hero is called SkyDog"
    return myUser;
  }
  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

}
