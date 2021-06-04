import { Component, OnInit, Input } from '@angular/core';
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

  constructor(
    public challengeService: ChallengeService,
    public formBuilder: FormBuilder,
  ) { }

  @Input() titleChallenge: string;
  @Input() descriptionChallenge: string;
  @Input() categoryChallenge: string;
  @Input() locationChallenge: string;
  @Input() setterChallenge: string;
  @Input() dateChallenge: string;
  @Input() socialpointsChallenge: string;
  @Input() votesChallenge: string;
  @Input() id: string;
  @Input() statusvotesChallenge: string;



  ngOnInit(): void {
  }

  styleChange(element){

    element.target.classList.add("upvote-button-wrapper-clicked");
  }

  upvote(element){
    var res2;
    this.challengeService.getChallengeDog(this.id).subscribe((res) => {
      res2 = res.data();
      this.vote = res2;

      if(this.vote.statusvotes=='vote'){
        this.vote.votes++;
        this.vote.statusvotes = 'gevotet ✔️';
        /* console.log(this.vote.statusvotes);
        console.log(this.vote.votes);
        console.log("upgevotet"); */

      }else{
        this.vote.votes--;
        this.vote.statusvotes = 'vote';
        /* console.log(this.vote.statusvotes);
        console.log(this.vote.votes);
        console.log("downgevotet"); */
      };
    this.challengeService.updateVotes(this.vote, element, this.id);

    //console.log("letztes update" + element.target.classList);
    })


  }
}
