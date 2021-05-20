import { Challenge } from './../models/challenge.model';
import { Injectable, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private angularFirestore: AngularFirestore) {}


  getChallengeDoc(id) {
    return this.angularFirestore
    .collection('challenge-collection')
    .doc(id)
    .valueChanges();
  }

  getChallengeDog(id) {
    return this.angularFirestore
    .collection('challenge-collection')
    .doc(id)
    .get();
  }


  updateVotes(challenge: Challenge,element, id){
    var update = this.angularFirestore
    .collection('challenge-collection')
    .doc(id)
    .update({
      votes: challenge.votes,
      statusvotes: challenge.statusvotes
    });
    return update;
  }

  getChallengeList() {
    return this.angularFirestore
    .collection('challenge-collection')
    .snapshotChanges();
  }

  getChallengeDetail(challengeId: string): Observable<Challenge> {
    return this.angularFirestore
      .collection('challenge-collection')
      .doc<Challenge>(challengeId)
      .valueChanges();
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

