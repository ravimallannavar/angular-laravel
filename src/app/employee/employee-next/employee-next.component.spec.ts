import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNextComponent } from './employee-next.component';

describe('EmployeeNextComponent', () => {
  let component: EmployeeNextComponent;
  let fixture: ComponentFixture<EmployeeNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
