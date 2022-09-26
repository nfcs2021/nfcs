import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePasswordGenerationComponent } from './employee-password-generation.component';

describe('EmployeePasswordGenerationComponent', () => {
  let component: EmployeePasswordGenerationComponent;
  let fixture: ComponentFixture<EmployeePasswordGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePasswordGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePasswordGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
