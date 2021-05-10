import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlossmeterShelfComponent } from './flossmeter-shelf.component';

describe('FlossmeterShelfComponent', () => {
  let component: FlossmeterShelfComponent;
  let fixture: ComponentFixture<FlossmeterShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlossmeterShelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlossmeterShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
