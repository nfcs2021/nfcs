import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AddPatientComponent } from './patinet-contents/add-patient/add-patient.component';
import { PatientMainComponent } from './patinet-contents/patient-main/patient-main.component';
import { PatientSurveyFormComponent } from './patinet-contents/patient-survey-form/patient-survey-form.component';




@NgModule({
  declarations: [
    DashboardHomeComponent,
    MainLayoutComponent,
    AddPatientComponent,
    PatientMainComponent,
    PatientSurveyFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class DashboardModule { }
