import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.scss']
})
export class CreateChallengeComponent implements OnInit {
  public challengeForm: FormGroup;
  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  public downloadURL: Observable<string>;
  public path: string;
  files: File[] = [];

  constructor(
    public challengeService: ChallengeService,
    public formBuilder: FormBuilder,
    public router: Router,
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {  }
  ngOnInit(): void {
    this.challengeForm = this.formBuilder.group({
      title: [''],
      description: [''],
      category: [''],
      location: [''],
      setter: [''],
      date: new Date(),
      votes: 0,
      statusvotes: 'vote',
      status: new FormControl(false),
      socialpoints: 5,
      downloadURL: [''],
      path: [''],
      eventDate: ['getDate();'], // formatedDate
      eventTime: [''],
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.challengeForm.value.downloadURL = this.downloadURL;
    this.challengeForm.value.path = this.path;
    this.challengeService.createChallenge(this.challengeForm.value);
    this.router.navigate(['/challenges']);




    // console.log(testDate);
   }


   startUpload( event: FileList) {
    // The file object
    const file = event.item(0);
    // Client-side validation
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }
    // The storage path
    this.path = `images/challenges/${new Date().getTime()}_${file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(this.path);

    // The main task
    this.task = this.storage.upload(this.path, file);


    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      finalize( async () =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db.collection('images').add( { downloadURL: this.downloadURL, path: this.path });
        console.log(this.downloadURL, this.path);
        return (this.downloadURL, this.path);
      }),
    );
    }

}


