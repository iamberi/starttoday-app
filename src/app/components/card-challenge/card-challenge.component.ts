import { Component, OnInit } from '@angular/core';
import { ChallengeService } from './../../services/challenge.service';
import { Challenge } from './../../models/challenge.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { __classPrivateFieldSet } from 'tslib';

@Component({
  selector: 'app-card-challenge',
  templateUrl: './card-challenge.component.html',
  styleUrls: ['./card-challenge.component.scss']
})
export class CardChallengeComponent implements OnInit {

  public vote: Challenge;

  constructor() { }
  public challengeService: ChallengeService
  public formBuilder: FormBuilder

  ngOnInit(): void {
  }

  bushi(element){
    console.log("bevor"+ element.target.classList);
    this.upvote(element);
    console.log("nach fkt 1"+ element.target.classList);
    this.styleChange(element);
    console.log("nach fkt 2"+ element.target.classList);
  }

  styleChange(element){
    element.target.classList.toggle("upvote-button-wrapper-clicked");
  }

  upvote(element){
    var res2;
    //id Fehler müsste behoben sein, sobald korretkte Daten
    this.challengeService.getChallengeDog(this.id).subscribe((res) => {
      res2 = res.data();
      this.vote = res2;

      if(this.vote.statusvotes==false){
        this.vote.votes++;
        this.vote.statusvotes = true;
        console.log(this.vote.statusvotes);
        console.log(this.vote.votes);


      }else{
        this.vote.votes--;
        this.vote.statusvotes = false;
        console.log(this.vote.statusvotes);
        console.log(this.vote.votes);
      };
    this.challengeService.updateVotes(this.vote, this.id);
    console.log("updated");
    element.target.classList.toggle("upvote-button-wrapper-clicked");
    console.log("letztes updated");
    console.log("letztes updated"+ element.target.classList);
    })


  }
}
