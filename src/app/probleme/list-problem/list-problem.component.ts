import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../services/problem.service';
import { Problem } from '../../models/problem.model';

@Component({
  selector: 'app-list-problem',
  templateUrl: './list-problem.component.html',
  styleUrls: ['./list-problem.component.scss']
})
export class ListProblemComponent implements OnInit {
  Problems: Problem[];


  constructor(private problemService: ProblemService) { }

  ngOnInit() {
    this.problemService.getProblemList().subscribe(res => {
      this.Problems = res.map( e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as Problem;
      });
    });
  }

  removeProblem = problem => this.problemService.deleteProblem(problem);
  }
