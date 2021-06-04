import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevorstehendeChallengesPComponent } from './bevorstehende-challenges-p.component';

describe('BevorstehendeChallengesPComponent', () => {
  let component: BevorstehendeChallengesPComponent;
  let fixture: ComponentFixture<BevorstehendeChallengesPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BevorstehendeChallengesPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BevorstehendeChallengesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
