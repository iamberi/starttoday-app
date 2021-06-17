import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProblemService } from './../services/problem.service';
import { Problem } from './../models/problem.model';

@Component({
  selector: 'app-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.scss']
})
export class ProblemeComponent implements OnInit {
  Problems: Problem[];
  ProblemCount: any;

  constructor(public problemService: ProblemService) {
  }
  async ngOnInit(): Promise<void> {
   await this.problemService.getProblemList().subscribe(res => {
      this.Problems = res.map( e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as Problem;
      });
    });
   this.ProblemCount = await this.problemService.counterProblems();
    }
  }




