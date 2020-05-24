import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeManagementComponent } from './edit-employee-management.component';

describe('EditEmployeeManagementComponent', () => {
  let component: EditEmployeeManagementComponent;
  let fixture: ComponentFixture<EditEmployeeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
