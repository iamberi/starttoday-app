import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Component, OnInit } from '@angular/core';
import { ProblemService } from './../services/problem.service';
import { Problem } from './../models/problem.model';

@Component({
  selector: 'app-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.scss']
})
export class ProblemeComponent implements OnInit {
  Problems: Problem[];
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;


  constructor(private problemService: ProblemService, private problemStorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.problemService.getProblemList().subscribe(res => {
      this.Problems = res.map( e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as Problem;
      });
    });
  }

 /*  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.problemStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.downloadURL = this.task.downloadURL();
  }
 */
  removeProblem = problem => this.problemService.deleteProblem(problem);
  }
