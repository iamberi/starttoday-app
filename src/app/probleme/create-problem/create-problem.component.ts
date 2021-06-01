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
  public downloadURL: Observable<string>
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
      /* image: this.formBuilder.group({
        downloadURL: [''],
        path: [''], */

      image: new FormControl (null, {validators: [Validators.required]})
      });
  }

  onSubmit() {
    this.db.collection('problem-collection').add
    this.problemService.createProblem(this.problemForm.value);
    this.router.navigate(['/probleme']);
   };

  ImageToDB(element){
    this.problemService.getImageDoc(this.ImageID);

  }
 /*  onSelect (event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.problemForm.patchValue({image: file});
    this.problemForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result.toString();
    };
    reader.readAsDataURL(file);
    } */

    startUpload( event: FileList) {
      // The file object
      const file = event.item(0);

      // Client-side validation
      if (file.type.split('/')[0] !== 'image') {
        console.error('unsupported file type :( ');
        return;
      }

      // The storage path
      const path = `images/${new Date().getTime()}_${file.name}`;

      // Reference to storage bucket
      const ref = this.storage.ref(path);

      // The main task
      this.task = this.storage.upload(path, file);


      this.snapshot   = this.task.snapshotChanges().pipe(
        tap(console.log),
        finalize( async () =>  {
          this.downloadURL = await ref.getDownloadURL().toPromise();

          this.db.collection('images').add( { downloadURL: this.downloadURL, path });
          return (this.downloadURL, path);
        }),
      );
      }
}
