import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-upvote-button',
  templateUrl: './upvote-button.component.html',
  styleUrls: ['./upvote-button.component.scss']
})
export class UpvoteButtonComponent implements OnInit {

  constructor() { }

  @Input() votesProblem: string;
  ngOnInit(): void {
  }

}
