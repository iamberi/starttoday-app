import { User } from 'src/app/shared/services/user';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import { EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-profil-unternehmen',
  templateUrl: './profil-unternehmen.component.html',
  styleUrls: ['./profil-unternehmen.component.scss']
})
export class ProfilUnternehmenComponent implements OnInit {
  public user:User;

  constructor(
    public authService: AuthService
  ) { }

  @Input() displayName: string;
  @Input() email: string;
  ngOnInit(): void {
  }

}
