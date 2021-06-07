import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemBearbeitenComponent } from './problem-bearbeiten.component';

describe('ProblemBearbeitenComponent', () => {
  let component: ProblemBearbeitenComponent;
  let fixture: ComponentFixture<ProblemBearbeitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemBearbeitenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemBearbeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
