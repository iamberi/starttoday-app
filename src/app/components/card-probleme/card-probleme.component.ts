import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-probleme',
  templateUrl: './card-probleme.component.html',
  styleUrls: ['./card-probleme.component.scss']
})
export class CardProblemeComponent implements OnInit {

  constructor() { }
  @Input() titleProblem: string;
  @Input() descriptionProblem: string;
  @Input() categoryProblem: string;

  ngOnInit(): void {
  }

}
