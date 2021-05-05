import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInStartComponent } from './logged-in-start.component';

describe('LoggedInStartComponent', () => {
  let component: LoggedInStartComponent;
  let fixture: ComponentFixture<LoggedInStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
