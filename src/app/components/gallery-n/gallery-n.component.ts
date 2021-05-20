import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery-n',
  templateUrl: './gallery-n.component.html',
  styleUrls: ['./gallery-n.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class GalleryNComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
  }

}
