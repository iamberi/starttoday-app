import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";


@Component({
  selector: 'app-logged-in-start',
  templateUrl: './logged-in-start.component.html',
  styleUrls: ['./logged-in-start.component.scss']
})
export class LoggedInStartComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(
    public FirebaseService: FirebaseService,
    public authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  logout(){
    this.FirebaseService.logout()
    this.isLogout.emit()
  }
}
