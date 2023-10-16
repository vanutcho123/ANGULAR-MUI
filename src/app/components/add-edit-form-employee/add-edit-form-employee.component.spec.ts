import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFormEmployeeComponent } from './add-edit-form-employee.component';

describe('AddEditFormEmployeeComponent', () => {
  let component: AddEditFormEmployeeComponent;
  let fixture: ComponentFixture<AddEditFormEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditFormEmployeeComponent]
    });
    fixture = TestBed.createComponent(AddEditFormEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
