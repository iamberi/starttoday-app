import { ProblemService } from './../../services/problem.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Problem } from './../../models/problem.model';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { __classPrivateFieldSet } from 'tslib';



@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class ProblemDetailComponent implements OnInit {
  public problem: Problem;

  showNavigationArrows = true;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public vote: Problem;



  constructor(
    private problemService: ProblemService,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
  ) { }
  @Input() titleProblem: string;
  @Input() descriptionProblem: string;
  @Input() categoryProblem: string;
  @Input() locationProblem: string;
  @Input() votesProblem: string;
  @Input() id: string;
  @Input() statusvotesProblem: string;
  @Input() solution: string;


  ngOnInit(): void {
    const problemId: string = this.route.snapshot.paramMap.get('id');
    const displaySolution = document.getElementById('problem-solution-wrapper');
    const button = document.getElementById('solution-button');

    this.problemService.getProblemDetail(problemId).subscribe(problem => {
      this.problem = problem;
      // Prüft ob eine Lösung eingetragen wurde und gibt, falls ja lösung aus und disabled den button
      if (this.problem.solution !== null && this.problem.solution !== ''){
        displaySolution.className = 'problem-solution-wrapper-visible';
        (document.getElementById('solution-button') as HTMLButtonElement).disabled = true;
        button.className = 'button-disabled';
        button.innerHTML = 'Gelöst';
      }
    });
  }

  upvote(element){
    var res2;
    this.problemService.getProblemDog(this.id).subscribe((res) => {
      res2 = res.data();
      this.vote = res2;

      if (this.vote.statusvotes=='vote'){
        this.vote.votes++;
        this.vote.statusvotes = 'gevotet ✔️';
        console.log("upvote");
        console.log(this.vote.statusvotes);
        console.log(this.vote.votes);


      }else{
        this.vote.votes--;
        this.vote.statusvotes = 'vote';
        console.log("downvote");
        console.log(this.vote.statusvotes);
        console.log(this.vote.votes);
      };
      this.problemService.updateVotes(this.vote, element, this.id);
      console.log("updated");
      console.log(element.target.classList);
    })

  }

}
