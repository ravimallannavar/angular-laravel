import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectemployeeComponent } from './selectemployee.component';

describe('SelectemployeeComponent', () => {
  let component: SelectemployeeComponent;
  let fixture: ComponentFixture<SelectemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
