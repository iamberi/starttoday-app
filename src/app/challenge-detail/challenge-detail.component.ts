/* import { Component, OnInit, Input } from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-challenges-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.scss']
})
export class ChallengesDetailComponent implements OnInit {

  challengeRef: any

  constructor(
    public challengeService: ChallengeService,
    private act: ActivatedRoute,
    private router: Router
  ) { }
  @Input() titleChallenge: string;
  @Input() descriptionChallenge: string;
  @Input() categoryChallenge: string;
  @Input() locationChallenge: string;
  @Input() setterChallenge: string;
  @Input() dateChallenge: string;
  @Input() socialpointsChallenge: string;

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    this.challengeService.getChallengeDoc(id).subscribe(res => {
      this.challengeRef = res;
        this.editForm = this.formBuilder.group({
        title: [this.challengeRef.name],
        description: [this.challengeRef.email],
        category: [this.challengeRef.contact]
      })
    })
  }

}
 */


import { ChallengeService } from './../services/challenge.service';
import { Component, OnInit } from '@angular/core';
import { Challenge } from '../models/challenge.model';

@Component({
  selector: 'app-challenges-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.scss']
})
export class ChallengesDetailComponent implements OnInit {
  private detailChallenge: any


  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.challengeService.getChallenge().subscribe(res => {
      this.detailChallenge = res.map( e => {
        console.log(e.payload.doc.data() as object);
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as Challenge;
      });
    });
  }
