import { ProblemService } from './../../services/problem.service';
import { Problem } from './../../models/problem.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  ngOnInit(): void {
  }

  upvote(element){
    var res2;
    element.target.classList.add("upvote-button-wrapper-clicked");

    this.problemService.getProblemDog(this.id).subscribe((res) => {

      res2 = res.data();
      this.vote = res2;
      this.vote.votes++;
      console.log(this.vote);
      this.problemService.updateVotes(this.vote,this.id);

    })


  }
}
