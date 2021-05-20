import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryNComponent } from './gallery-n.component';

describe('GalleryNComponent', () => {
  let component: GalleryNComponent;
  let fixture: ComponentFixture<GalleryNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
