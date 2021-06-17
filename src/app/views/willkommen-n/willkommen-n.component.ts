import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-willkommen-n',
  templateUrl: './willkommen-n.component.html',
  styleUrls: ['./willkommen-n.component.scss']
})
export class WillkommenNComponent implements OnInit {

  constructor
  (
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
