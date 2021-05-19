import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../../services/problem.service';
import { Problem } from '../../../models/problem.model';


@Component({
  selector: 'app-delete-problem',
  templateUrl: './delete-problem.component.html',
  styleUrls: ['./delete-problem.component.scss']
})
export class DeleteProblemComponent implements OnInit {
  Problems: Problem[];

  constructor(private problemService: ProblemService) { }

  ngOnInit(): void {
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
