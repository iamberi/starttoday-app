import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-regular-button',
  templateUrl: './regular-button.component.html',
  styleUrls: ['./regular-button.component.scss']
})
export class RegularButtonComponent implements OnInit {

  @Input() text: string;
  constructor() { }

  ngOnInit(): void {
  }

}
