import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesDetailComponent } from './challenge-detail.component';

describe('ChallengesDetailComponent', () => {
  let component: ChallengesDetailComponent;
  let fixture: ComponentFixture<ChallengesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
