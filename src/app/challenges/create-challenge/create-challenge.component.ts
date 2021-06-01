
import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.scss']
})
export class CreateChallengeComponent implements OnInit {
/*   myScriptElement: HTMLScriptElement;
 */  public challengeForm: FormGroup;

  constructor(
    public challengeService: ChallengeService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {
/*     this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = 'src/js/components/date.js';
    document.body.appendChild(this.myScriptElement); */

    this.challengeForm = this.formBuilder.group({
      title: [''],
      description: [''],
      category: [''],
      location: [''],
      setter: [''],
      date: new Date(),
      votes: 0,
      statusvotes: 'vote',
      status: new FormControl(false),
      socialpoints: 5,
      eventDate: ['getDate();'], // formatedDate
      eventTime: [''],
    });

  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.challengeService.createChallenge(this.challengeForm.value);
    this.router.navigate(['/challenges']);




    // console.log(testDate);
   }

}


