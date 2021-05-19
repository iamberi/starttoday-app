import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../../../services/problem.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-problem',
  templateUrl: './edit-problem.component.html',
  styleUrls: ['./edit-problem.component.scss']
})
export class EditProblemComponent implements OnInit {

  public editForm: FormGroup;
  problemRef: any

  constructor(
    public problemService: ProblemService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      title: [''],
      description: [''],
      category: ['']
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.problemService.getProblemDoc(id).subscribe(res => {
      this.problemRef = res;
      this.editForm = this.formBuilder.group({
        title: [this.problemRef.name],
        description: [this.problemRef.email],
        category: [this.problemRef.contact]
      })
    })
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');

    this.problemService.updateProblem(this.editForm.value, id);
    this.router.navigate(['list-problems']);
  };

}
