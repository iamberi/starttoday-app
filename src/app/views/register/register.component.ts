import { Component, OnInit } from '@angular/core';
import { User } from '../../user';


@Component({
  selector: 'app-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model = new User (24, '', '', '', '');
  submitted = false;

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  newUser():void {
    this.model = new User(42, '', '', '', '');
  }


  onSubmit():void {
    this.submitted = true;
    return;
  }

  skyDog(): User {
    const myUser =  new User(42, 'hanna', 'musterfrau', 'info@mail', 'password');
    console.log('My hero is called ' + myUser.vorname); // "My hero is called SkyDog"
    return myUser;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
