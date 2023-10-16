import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFormTaskComponent } from './add-edit-form-task.component';

describe('AddEditFormTaskComponent', () => {
  let component: AddEditFormTaskComponent;
  let fixture: ComponentFixture<AddEditFormTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditFormTaskComponent]
    });
    fixture = TestBed.createComponent(AddEditFormTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
