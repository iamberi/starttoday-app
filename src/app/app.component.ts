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

  item: TestModel = {};
  testModelCollection: AngularFirestoreCollection<any>;
  list: Observable<TestModel[]>;

  constructor(
    private afs: AngularFirestore) {
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
    }

    public save() {
      this.testModelCollection.add(this.item);
      this.item = {};
    }
}
