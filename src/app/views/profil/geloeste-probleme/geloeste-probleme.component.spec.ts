import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeloesteProblemeComponent } from './geloeste-probleme.component';

describe('GeloesteProblemeComponent', () => {
  let component: GeloesteProblemeComponent;
  let fixture: ComponentFixture<GeloesteProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeloesteProblemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeloesteProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
