import { ChallengeService } from './../../services/challenge.service';
import { Component, OnInit } from '@angular/core';
import { Challenge } from '../../models/challenge.model';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {
  Challenges: Challenge[];



  constructor(private challengeService: ChallengeService) { }

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

  //removeChallenge = challenge => this.challengeService.deleteChallenge(challenge);
  }

