import { ProblemService } from './../../../services/problem.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Problem } from './../../../models/problem.model';


@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.scss']
})
export class ProblemDetailComponent implements OnInit {
  public problem: Problem;


  constructor(
    private problemService: ProblemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const problemId: string = this.route.snapshot.paramMap.get('id');
    this.problemService.getProblemDetail(problemId).subscribe(problem => {
      this.problem = problem;
    });
  }

}
