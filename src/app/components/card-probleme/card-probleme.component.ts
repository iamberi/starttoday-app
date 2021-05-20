import { ProblemService } from './../../services/problem.service';
import { Problem } from './../../models/problem.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { __classPrivateFieldSet } from 'tslib';



@Component({
  selector: 'app-card-probleme',
  templateUrl: './card-probleme.component.html',
  styleUrls: ['./card-probleme.component.scss']
})
export class CardProblemeComponent implements OnInit {

  public vote: Problem;

  constructor(
    public problemService: ProblemService,
    public formBuilder: FormBuilder,

  ) { }
  @Input() titleProblem: string;
  @Input() descriptionProblem: string;
  @Input() categoryProblem: string;
  @Input() locationProblem: string;
  @Input() votesProblem: string;
  @Input() id: string;
  @Input() statusvotesProblem: string;
  ngOnInit(): void {
  }


  bushi(element){
    /* console.log("bevor"+ element.target.classList);
    this.upvote(element);
    console.log("nach fkt 1"+ element.target.classList); */
    this.styleChange(element);
    console.log("nach fkt 2"+ element.target.classList);
  }

  async styleChange(element){
    /* await this.upvote(element);
    console.log("upvote done"); */
    element.target.classList.add("upvote-button-wrapper-clicked");
    console.log("style" + element.target.classList);
  }

  async upvote(element){
    var res2;
    await this.problemService.getProblemDog(this.id).subscribe((res) => {
      res2 = res.data();
      this.vote = res2;

      if(this.vote.statusvotes==false){
        this.vote.votes++;
        this.vote.statusvotes = true;
        console.log("upvote");
        console.log(this.vote.statusvotes);
        console.log(this.vote.votes);


      }else{
        this.vote.votes--;
        this.vote.statusvotes = false;
        console.log("downvote");
        console.log(this.vote.statusvotes);
        console.log(this.vote.votes);
      };
    this.problemService.updateVotes(this.vote, element, this.id);
    console.log("updated");
    console.log(element.target.classList);
    })
    this.styleChange(element);
    console.log("style" + element.target.classList);

  }
}
