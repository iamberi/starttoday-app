import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChallengeComponent } from './card-challenge.component';

describe('CardChallengeComponent', () => {
  let component: CardChallengeComponent;
  let fixture: ComponentFixture<CardChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
