import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';


@Component({
  selector: 'app-form',
  templateUrl: './register-n.component.html',
  styleUrls: ['./register-n.component.scss']
})
export class RegisterNComponent implements OnInit {
  model = new User (24, '', '', '', '','');
  submitted = false;

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  newUser():void {
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
  }

  constructor() { }

  ngOnInit(): void {
  }

}
