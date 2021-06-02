import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPrivatpersonComponent } from './profil-privatperson.component';

describe('ProfilPrivatpersonComponent', () => {
  let component: ProfilPrivatpersonComponent;
  let fixture: ComponentFixture<ProfilPrivatpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilPrivatpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPrivatpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
