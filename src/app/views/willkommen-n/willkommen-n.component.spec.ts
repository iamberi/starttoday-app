import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillkommenNComponent } from './willkommen-n.component';

describe('WillkommenNComponent', () => {
  let component: WillkommenNComponent;
  let fixture: ComponentFixture<WillkommenNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillkommenNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillkommenNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
