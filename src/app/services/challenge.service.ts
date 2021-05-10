import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Challenge } from '../models/challenge.model';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private angularFirestore: AngularFirestore) {}

    //Tutorial https://dottedsquirrel.com/angular/how-to-crud-in-angular-firebase-firestore/

    form = new FormGroup({
      challengeName: new FormControl(''),
      challengeNumber: new FormControl(''),
      category: new FormControl(''),
      completed: new FormControl(false)
    })

  getChallengeDoc(id) {
    return this.angularFirestore
    .collection('challenge-collection')
    .doc(id)
    .valueChanges();
  }

  getChallengeList() {
    return this.angularFirestore
    .collection('challenge-collection')
    .snapshotChanges();
  }

  createChallenge(challenge: Challenge) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection('challenge-collection')
        .add(challenge)
        .then(response => { console.log(response); }, error => reject(error));
    });
  }

  deleteChallenge(challenge) {
    return this.angularFirestore
      .collection('challenge-collection')
      .doc(challenge.id)
      .delete();
  }

  updateChallenge(challenge: Challenge, id) {
    return this.angularFirestore
      .collection('challenge-collection')
      .doc(id)
      .update({
        title: challenge.title,
        description: challenge.description,
        category: challenge.category
      });
  }
}

