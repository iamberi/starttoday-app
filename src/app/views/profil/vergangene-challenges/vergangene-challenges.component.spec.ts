import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VergangeneChallengesComponent } from './vergangene-challenges.component';

describe('VergangeneChallengesComponent', () => {
  let component: VergangeneChallengesComponent;
  let fixture: ComponentFixture<VergangeneChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VergangeneChallengesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VergangeneChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
