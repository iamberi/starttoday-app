import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemErstellenComponent } from './problem-erstellen.component';

describe('ProblemErstellenComponent', () => {
  let component: ProblemErstellenComponent;
  let fixture: ComponentFixture<ProblemErstellenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemErstellenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemErstellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
