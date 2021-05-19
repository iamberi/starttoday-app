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
  @Input() votesProblem: string;
  @Input() id: string;
  @Input() statusvotesProblem: string;
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
    this.problemService.getProblemDog(this.id).subscribe((res) => {
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
    this.problemService.updateVotes(this.vote, this.id);
    console.log("updated");
    element.target.classList.toggle("upvote-button-wrapper-clicked");
    console.log("letztes updated");
    console.log("letztes updated"+ element.target.classList);
    })


  }
}
