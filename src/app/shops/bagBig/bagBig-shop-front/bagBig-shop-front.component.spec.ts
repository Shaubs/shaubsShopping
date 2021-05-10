import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bagBigShopFrontComponent } from './bagBig-shop-front.component';

describe('bagBigShopFrontComponent', () => {
  let component: bagBigShopFrontComponent;
  let fixture: ComponentFixture<bagBigShopFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [bagBigShopFrontComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(bagBigShopFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
