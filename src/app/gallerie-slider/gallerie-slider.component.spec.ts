import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerieSliderComponent } from './gallerie-slider.component';

describe('GallerieSliderComponent', () => {
  let component: GallerieSliderComponent;
  let fixture: ComponentFixture<GallerieSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerieSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerieSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
