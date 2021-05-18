import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-upvote-button',
  templateUrl: './upvote-button.component.html',
  styleUrls: []
})
export class UpvoteButtonComponent implements OnInit {

  constructor() { }

  @Input() votesProblem: string;
  ngOnInit(): void {
  }

}
