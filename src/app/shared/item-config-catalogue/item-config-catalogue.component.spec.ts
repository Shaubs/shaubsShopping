import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemConfigCatalogueComponent } from './item-config-catalogue.component';

describe('ItemConfigCatalogueComponent', () => {
  let component: ItemConfigCatalogueComponent;
  let fixture: ComponentFixture<ItemConfigCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemConfigCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemConfigCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
