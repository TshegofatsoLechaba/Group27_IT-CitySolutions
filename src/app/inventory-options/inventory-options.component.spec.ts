import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryOptionsComponent } from './inventory-options.component';

describe('InventoryOptionsComponent', () => {
  let component: InventoryOptionsComponent;
  let fixture: ComponentFixture<InventoryOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
