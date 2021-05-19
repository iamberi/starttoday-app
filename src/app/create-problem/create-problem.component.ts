import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../services/problem.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-problem',
  templateUrl: './create-problem.component.html',
  styleUrls: ['./create-problem.component.scss']
})
export class CreateProblemComponent implements OnInit {
  public problemForm: FormGroup;

  constructor(
    public problemService: ProblemService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.problemForm = this.formBuilder.group({
      title: [''],
      description: [''],
      category: [''],
      location: [''],
      votes: 0,
      socialpoints: 3
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.problemService.createProblem(this.problemForm.value);
    this.router.navigate(['/probleme']);
   };

}
