import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUnternehmenComponent } from './profil-unternehmen.component';

describe('ProfilUnternehmenComponent', () => {
  let component: ProfilUnternehmenComponent;
  let fixture: ComponentFixture<ProfilUnternehmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilUnternehmenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilUnternehmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
