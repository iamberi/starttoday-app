import { CardProblemeComponent } from './../components/card-probleme/card-probleme.component';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Problem } from '../models/problem.model';
import { Observable } from 'rxjs';



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

  getProblemDog(id) {
    return this.angularFirestore
    .collection('problem-collection')
    .doc(id)
    .get();
  }

  updateVotes(problem: Problem,element, id){
    return this.angularFirestore
    .collection('problem-collection')
    .doc(id)
    .update({
      votes: problem.votes,
      statusvotes: problem.statusvotes
    });
  }

  getProblemList() {
    return this.angularFirestore
    .collection('problem-collection')
    .snapshotChanges();
  }

  getProblemDetail(problemId: string): Observable<Problem> {
    return this.angularFirestore
      .collection('problem-collection')
      .doc<Problem>(problemId)
      .valueChanges();
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

