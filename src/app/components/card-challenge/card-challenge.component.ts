import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-challenge',
  templateUrl: './card-challenge.component.html',
  styleUrls: ['./card-challenge.component.scss']
})
export class CardChallengeComponent implements OnInit {

  constructor() { }
  @Input() titleChallenge: string;
  @Input() descriptionChallenge: string;
  @Input() categoryChallenge: string;
  @Input() locationChallenge: string;
  @Input() setterChallenge: string;
  @Input() dateChallenge: string;
  @Input() socialpointsChallenge: string;

  ngOnInit(): void {
  }

}
