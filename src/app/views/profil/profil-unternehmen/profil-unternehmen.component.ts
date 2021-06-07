import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: 'app-profil-unternehmen',
  templateUrl: './profil-unternehmen.component.html',
  styleUrls: ['./profil-unternehmen.component.scss']
})
export class ProfilUnternehmenComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
