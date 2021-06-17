import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/services/user';
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: 'app-profil-privatperson',
  templateUrl: './profil-privatperson.component.html',
  styleUrls: ['./profil-privatperson.component.scss']
})
export class ProfilPrivatpersonComponent implements OnInit {

  public user:User;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
