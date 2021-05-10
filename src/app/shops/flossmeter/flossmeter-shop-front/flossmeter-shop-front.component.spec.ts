import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlossmeterShopFrontComponent } from './flossmeter-shop-front.component';

describe('FlossmeterShopFrontComponent', () => {
  let component: FlossmeterShopFrontComponent;
  let fixture: ComponentFixture<FlossmeterShopFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlossmeterShopFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlossmeterShopFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
