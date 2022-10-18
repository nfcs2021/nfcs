import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from '../dashboard-home/dashboard-home.component';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { PatientMainComponent } from '../patinet-contents/patient-main/patient-main.component';
import { AddPatientComponent } from '../patinet-contents/add-patient/add-patient.component';
import { PatientSurveyFormComponent } from '../patinet-contents/patient-survey-form/patient-survey-form.component';
import { NewpatientNavigationComponent } from '../patinet-contents/newpatient-navigation/newpatient-navigation.component';
import { PatientListComponent } from '../patinet-contents/patient-list/patient-list.component';
import { ViewreportComponent } from '../patinet-contents/viewreport/viewreport.component';
import { PatientdataComponent } from '../patinet-contents/patientdata/patientdata.component';
import { PatientReportComponent } from '../patinet-contents/patient-report/patient-report.component';
import { FrontdeskMainComponent } from '../frontdesk-contents/frontdesk-main/frontdesk-main.component';
import { FrontdeskDetailsComponent } from '../frontdesk-contents/frontdesk-details/frontdesk-details.component';
import { AuthRouteGaurdService } from '../services/auth-route-gaurd.service';
<<<<<<< HEAD
import { FrontdeskRegistrationComponent } from '../frontdesk-contents/frontdesk-registration/frontdesk-registration.component';
=======
import { FrontdesklistComponent } from '../frontdesk-contents/frontdesklist/frontdesklist.component';

>>>>>>> 22b28c4d29aef0eb0e4e91a3fd3bad79ad9cbbbb

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      {
        path: 'patient',
        component: PatientMainComponent,
        children: [
          { path: '', redirectTo: 'details', pathMatch: 'full' },
<<<<<<< HEAD
          {
            path: 'new',
            component: AddPatientComponent,
            canActivate: [AuthRouteGaurdService],
          },
=======
          { path: 'new', component: AddPatientComponent, canActivate: [AuthRouteGaurdService] },
>>>>>>> 22b28c4d29aef0eb0e4e91a3fd3bad79ad9cbbbb
          { path: 'survey-form/:id', component: PatientSurveyFormComponent },
          { path: 'list', component: PatientListComponent },
          { path: 'view', component: ViewreportComponent },
          { path: 'view/:id', component: ViewreportComponent },
          { path: 'nav', component: NewpatientNavigationComponent },
          { path: 'data/:id', component: PatientdataComponent },
          { path: 'patient-report/:id', component: PatientReportComponent },

        ],
      },
      {
        path: 'frontdesk',
        component: FrontdeskMainComponent,
        children: [
          { path: '', redirectTo: 'frontdeskdetails', pathMatch: 'full' },
          { path: 'frontdetails', component: FrontdeskDetailsComponent },
<<<<<<< HEAD
          {
            path: 'frontdesk-registration',
            component: FrontdeskRegistrationComponent,
          },
=======
          { path: 'frontdesklist', component: FrontdesklistComponent },
>>>>>>> 22b28c4d29aef0eb0e4e91a3fd3bad79ad9cbbbb
        ],
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
