import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaubsFormComponent } from './shaubs-form.component';

describe('ShaubsFormComponent', () => {
  let component: ShaubsFormComponent;
  let fixture: ComponentFixture<ShaubsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShaubsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaubsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
