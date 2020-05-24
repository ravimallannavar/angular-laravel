import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeManagementComponent } from './add-employee-management.component';

describe('AddEmployeeManagementComponent', () => {
  let component: AddEmployeeManagementComponent;
  let fixture: ComponentFixture<AddEmployeeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
