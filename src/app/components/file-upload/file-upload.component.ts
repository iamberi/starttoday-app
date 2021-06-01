import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
//import { Problem } from 'src/app/models/problem.model';


@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  public downloadURL: Observable<string>;

  files: File[] = [];

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  @Input() image: FormGroup;

  ngOnInit(): void {
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
      }),
    );
    console.log(this.downloadURL, path);
    return (this.downloadURL, path);
    }

    /* AddImgProblem(problemId: string): Observable<Problem>{
      this.db.collection('problem-collection')
        .doc<Problem>(problemId)
        .update( { downloadURL: this.downloadURL, path });
    } */
  }


