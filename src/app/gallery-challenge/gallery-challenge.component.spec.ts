import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryChallengeComponent } from './gallery-challenge.component';

describe('GalleryChallengeComponent', () => {
  let component: GalleryChallengeComponent;
  let fixture: ComponentFixture<GalleryChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
