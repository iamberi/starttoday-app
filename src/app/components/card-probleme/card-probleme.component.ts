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
  public status: boolean;
  //true=gevotet;false=nicht gevotet

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

    this.problemService.getProblemDog(this.id).subscribe((res) => {

      res2 = res.data();
      this.vote = res2;
      if(this.vote.statusvotes==false){
        this.vote.votes++;
        this.vote.statusvotes = true;
        console.log(this.vote.statusvotes);
        console.log(element.target);
        element.target.classList.toggle("upvote-button-wrapper-clicked");
        console.log(element.target);
      }else{
        this.vote.votes--;
        this.vote.statusvotes = false;
        console.log(this.vote.statusvotes);
      };
      this.problemService.updateVotes(this.vote, this.id);

    })


  }
}
