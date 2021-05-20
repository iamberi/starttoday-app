
import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.scss']
})
export class CreateChallengeComponent implements OnInit {
  public challengeForm: FormGroup;

  constructor(
    public challengeService: ChallengeService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {
    this.challengeForm = this.formBuilder.group({
      title: [''],
      description: [''],
      category: [''],
      date: new Date(),
      votes: 0,
      statusvotes: false,
      status: new FormControl(false),
      socialpoints: 5,
    });


  ngOnInit(): void {
  }

  onSubmit() {
    this.challengeService.createChallenge(this.challengeForm.value);
    this.router.navigate(['/challenges']);
   };

}
