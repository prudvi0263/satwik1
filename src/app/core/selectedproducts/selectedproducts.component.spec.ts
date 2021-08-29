import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedproductsComponent } from './selectedproducts.component';

describe('SelectedproductsComponent', () => {
  let component: SelectedproductsComponent;
  let fixture: ComponentFixture<SelectedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
