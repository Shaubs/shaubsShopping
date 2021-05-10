import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutItemCatalogueComponent } from './checkout-item-catalogue.component';

describe('CheckoutItemCatalogueComponent', () => {
  let component: CheckoutItemCatalogueComponent;
  let fixture: ComponentFixture<CheckoutItemCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutItemCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutItemCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
