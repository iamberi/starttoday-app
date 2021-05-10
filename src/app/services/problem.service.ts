import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Problem } from '../models/problem.model';


@Injectable({
  providedIn: 'root'
})

export class ProblemService {

  constructor(private angularFirestore: AngularFirestore) {}

  getProblemDoc(id) {
    return this.angularFirestore
    .collection('problem-collection')
    .doc(id)
    .valueChanges();
  }

  getProblemList() {
    return this.angularFirestore
    .collection('problem-collection')
    .snapshotChanges();
  }

  createProblem(problem: Problem) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection('problem-collection')
        .add(problem)
        .then(response => { console.log(response); }, error => reject(error));
    });
  }

  deleteProblem(problem) {
    return this.angularFirestore
      .collection('problem-collection')
      .doc(problem.id)
      .delete();
  }

  updateProblem(problem: Problem, id) {
    return this.angularFirestore
      .collection('problem-collection')
      .doc(id)
      .update({
        title: problem.title,
        description: problem.description,
        category: problem.category
      });
  }
}
