import { ChallengeService } from './../services/challenge.service';
import { Component, OnInit } from '@angular/core';
import { Challenge } from './../models/challenge.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {
  Challenges: Challenge[];
  numberChallenges: number;

  constructor(private challengeService: ChallengeService, private db: AngularFirestore) {
    this.db.firestore
    .collection('challenge-collection').get().then(querySnapshot => {
      console.log(`Found ${querySnapshot.size} documents.`);
      this.numberChallenges = querySnapshot.size;
      console.log(this.numberChallenges);
      return this.numberChallenges;
   });
  }

  ngOnInit(): void {
    this.challengeService.getChallengeList().subscribe(res => {
      this.Challenges = res.map( e => {
        console.log(e.payload.doc.data());
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as Challenge;
      });
    });
  }
}

