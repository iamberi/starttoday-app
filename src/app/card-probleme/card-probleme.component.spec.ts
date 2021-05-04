import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProblemeComponent } from './card-probleme.component';

describe('CardProblemeComponent', () => {
  let component: CardProblemeComponent;
  let fixture: ComponentFixture<CardProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProblemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
