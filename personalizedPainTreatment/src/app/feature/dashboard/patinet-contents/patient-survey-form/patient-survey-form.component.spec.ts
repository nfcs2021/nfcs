import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSurveyFormComponent } from './patient-survey-form.component';

describe('PatientSurveyFormComponent', () => {
  let component: PatientSurveyFormComponent;
  let fixture: ComponentFixture<PatientSurveyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSurveyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientSurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
