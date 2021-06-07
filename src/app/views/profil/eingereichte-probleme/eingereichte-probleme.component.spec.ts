import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EingereichteProblemeComponent } from './eingereichte-probleme.component';

describe('EingereichteProblemeComponent', () => {
  let component: EingereichteProblemeComponent;
  let fixture: ComponentFixture<EingereichteProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EingereichteProblemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EingereichteProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
