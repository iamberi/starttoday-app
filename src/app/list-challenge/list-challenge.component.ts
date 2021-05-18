import { ChallengeService } from './../services/challenge.service';
import { Component, OnInit } from '@angular/core';
import { Challenge } from '../models/challenge.model';

@Component({
  selector: 'app-list-challenge',
  templateUrl: './list-challenge.component.html',
  styleUrls: ['./list-challenge.component.scss']
})
export class ListChallengeComponent implements OnInit {
  Challenges: Challenge[];


  constructor(private challengeService: ChallengeService) { }

  ngOnInit() {
    this.challengeService.getChallengeList().subscribe(res => {
      this.Challenges = res.map( e => {
        console.log(e.payload.doc.data() as object);
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as Challenge;
      });
    });
  }

  removeChallenge = challenge => this.challengeService.deleteChallenge(challenge);
  }
