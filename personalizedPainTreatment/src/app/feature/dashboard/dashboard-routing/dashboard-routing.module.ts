import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from '../dashboard-home/dashboard-home.component';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { PatientMainComponent } from '../patinet-contents/patient-main/patient-main.component';
import { AddPatientComponent } from '../patinet-contents/add-patient/add-patient.component';
import { PatientSurveyFormComponent } from '../patinet-contents/patient-survey-form/patient-survey-form.component';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
        { path: '', component: DashboardHomeComponent },
        {
          path: 'patient',
          component: PatientMainComponent,
          children: [
            {path: '', redirectTo: 'details', pathMatch: 'full'},
            {path: 'new', component: AddPatientComponent},
            {path:'survey-form',component:PatientSurveyFormComponent}
          ]
          }
          ]
        },]
@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
