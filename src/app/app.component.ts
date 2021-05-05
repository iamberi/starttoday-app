import { FirebaseService } from './services/firebase.service';
import { TestModel } from './test-model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'starttoday-app';
  isSignedIn = false

  item: TestModel = {};
  testModelCollection: AngularFirestoreCollection<any>;
  list: Observable<TestModel[]>;

  constructor(
    private afs: AngularFirestore, public FirebaseService : FirebaseService) {
      this.testModelCollection = afs.collection<TestModel>('TestModel');
    }

    ngOnInit(): void {
      this.list = this.testModelCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as TestModel;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      if(localStorage.getItem('user')!== null)
      this.isSignedIn = true
      else
      this.isSignedIn = false
    }

    async onSignup(email:string, password:string){
      await this.FirebaseService.signup(email,password)
      if(this.FirebaseService.isLoggedIn)
      this.isSignedIn = true
    }

    async onSignin(email:string, password:string){
      await this.FirebaseService.signin(email,password)
      if(this.FirebaseService.isLoggedIn)
      this.isSignedIn = true
    }

    handleLogout(){
      this.isSignedIn = false
    }

    public save() {
      this.testModelCollection.add(this.item);
      this.item = {};
    }
}
