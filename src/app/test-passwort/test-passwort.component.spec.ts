import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPasswortComponent } from './test-passwort.component';

describe('TestPasswortComponent', () => {
  let component: TestPasswortComponent;
  let fixture: ComponentFixture<TestPasswortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPasswortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPasswortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
