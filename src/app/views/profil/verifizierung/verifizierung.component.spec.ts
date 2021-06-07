import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifizierungComponent } from './verifizierung.component';

describe('VerifizierungComponent', () => {
  let component: VerifizierungComponent;
  let fixture: ComponentFixture<VerifizierungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifizierungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifizierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
