import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevorstehendeChallengesComponent } from './bevorstehende-challenges.component';

describe('BevorstehendeChallengesComponent', () => {
  let component: BevorstehendeChallengesComponent;
  let fixture: ComponentFixture<BevorstehendeChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BevorstehendeChallengesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BevorstehendeChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
