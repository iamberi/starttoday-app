import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ChallengeService } from './../services/challenge.service';
import { Challenge } from '../models/challenge.model';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.scss']
})
export class ChallengesDetailComponent implements OnInit {
  public challenge: Challenge;


  constructor(
    private challengeService: ChallengeService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const challengeId: string = this.route.snapshot.paramMap.get('id');
    this.challengeService.getChallengeDetail(challengeId).subscribe(challenge => {
      this.challenge = challenge;
    });
  }
  }
