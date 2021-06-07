import { AngularFirestore } from '@angular/fire/firestore';
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
  numberProblems: number;

  constructor(private problemService: ProblemService, private db: AngularFirestore) {
    this.db.firestore
    .collection('problem-collection').get().then(querySnapshot => {
      console.log(`Found ${querySnapshot.size} documents.`);
      this.numberProblems = querySnapshot.size;
      console.log(this.numberProblems);
      return this.numberProblems;
   });
  }

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
  }
