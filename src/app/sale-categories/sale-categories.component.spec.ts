import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCategoriesComponent } from './sale-categories.component';

describe('SaleCategoriesComponent', () => {
  let component: SaleCategoriesComponent;
  let fixture: ComponentFixture<SaleCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
