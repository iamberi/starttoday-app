import { ChallengeService } from './../services/challenge.service';
import { Component, OnInit } from '@angular/core';
import { Challenge } from './../models/challenge.model';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {
  Challenges: Challenge[];
  ChallengeCount: any;

  constructor(private challengeService: ChallengeService) {
  }

  async ngOnInit(): Promise<void> {
    await this.challengeService.getChallengeList().subscribe(res => {
      this.Challenges = res.map( e => {
        //console.log(e.payload.doc.data());
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as Challenge;
      });
    });
    this.ChallengeCount = await this.challengeService.counterChallenges();
  }
}

