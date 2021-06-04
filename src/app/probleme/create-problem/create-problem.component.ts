import { Component, OnInit, Input } from '@angular/core';
import { ProblemService } from './../../services/problem.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-problem',
  templateUrl: './create-problem.component.html',
  styleUrls: ['./create-problem.component.scss']
})
export class CreateProblemComponent implements OnInit {
  public problemForm: FormGroup;
  public imagePreview: string;

  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  public downloadURL: Observable<string>;
  public path: string;
  files: File[] = [];

  constructor(
    public problemService: ProblemService,
    public formBuilder: FormBuilder,
    public router: Router,
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {  }

  @Input() ImageID: string;

  ngOnInit(): void {
    this.problemForm = this.formBuilder.group({
      title: [''],
      description: [''],
      category: [''],
      location: [''],
      date: new Date(),
      votes: 0,
      statusvotes: 'vote',
      socialpoints: 3,
     /*  image: this.formBuilder.group({
        downloadURL: [''],
        path: [''],
      }), */
      downloadURL: [''],
      path: [''],
  });
}

  onSubmit() {

    console.log('test2', this.problemForm.value);
    this.problemForm.value.downloadURL = this.downloadURL;
    this.problemForm.value.path = this.path;
    this.problemService.createProblem(this.problemForm.value);
    console.log('test', this.downloadURL, this.path);
    this.router.navigate(['/probleme']);
   };


    startUpload( event: FileList) {
      // The file object
      const file = event.item(0);
      // Client-side validation
      if (file.type.split('/')[0] !== 'image') {
        console.error('unsupported file type :( ');
        return;
      }
      // The storage path
      this.path = `images/${new Date().getTime()}_${file.name}`;

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
