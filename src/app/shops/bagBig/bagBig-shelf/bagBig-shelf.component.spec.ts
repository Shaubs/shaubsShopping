import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bagBigShelfComponent } from './bagBig-shelf.component';

describe('ShelfComponent', () => {
  let component: bagBigShelfComponent;
  let fixture: ComponentFixture<bagBigShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [bagBigShelfComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(bagBigShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
