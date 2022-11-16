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
import { FrontdeskRegistrationComponent } from '../frontdesk-contents/frontdesk-registration/frontdesk-registration.component';
import { FrontdesklistComponent } from '../frontdesk-contents/frontdesklist/frontdesklist.component';
import { FrontdeskPasswordChangeComponent } from '../frontdesk-contents/frontdesk-password-change/frontdesk-password-change.component';
import { ForgetpasswordComponent } from '../frontdesk-contents/forgetpassword/forgetpassword.component';
import { OtpComponent } from '../frontdesk-contents/otp/otp.component';
import { ContactComponent } from '../frontdesk-contents/contact/contact.component';
import { FrontdeskResetPasswordComponent } from '../frontdesk-contents/frontdesk-reset-password/frontdesk-reset-password.component';
import { AdminMainComponent } from '../admin-contents/admin-main/admin-main.component';
import { AdminListComponent } from '../admin-contents/admin-list/admin-list.component';
import { AdminDetailsComponent } from '../admin-contents/admin-details/admin-details.component';
import { AdminRegistrationComponent } from '../admin-contents/admin-registration/admin-registration.component';
<<<<<<< HEAD
import { PatientProfileComponent } from '../patinet-contents/patient-profile/patient-profile.component';




=======
>>>>>>> 406d7c7e8c24334b66e3aaad3f856b67f74f1757
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
          {
            path: 'new',
            component: AddPatientComponent,
            canActivate: [AuthRouteGaurdService],
          },
          {
            path: 'survey-form/:id',
            component: PatientSurveyFormComponent,
            canActivate: [AuthRouteGaurdService],
          },
          {
            path: 'list',
            component: PatientListComponent,
            canActivate: [AuthRouteGaurdService],
          },
          {
            path: 'view',
            component: ViewreportComponent,
            canActivate: [AuthRouteGaurdService],
          },
          {
            path: 'view/:id',
            component: ViewreportComponent,
            canActivate: [AuthRouteGaurdService],
          },
          {
            path: 'nav',
            component: NewpatientNavigationComponent,
            canActivate: [AuthRouteGaurdService],
          },
          {
            path: 'data/:id',
            component: PatientdataComponent,
            canActivate: [AuthRouteGaurdService],
          },
          {
            path: 'patient-report/:id',
            component: PatientReportComponent,
            canActivate: [AuthRouteGaurdService],
          },
          {
            path: 'new/:id', component: AddPatientComponent,
            canActivate: [AuthRouteGaurdService]
<<<<<<< HEAD
          }, {

            path: 'patient-profile/:id', component: PatientProfileComponent
          },
        ],
=======
<<<<<<< HEAD
          },
          { path: 'survey-form/:id', component: PatientSurveyFormComponent },
          { path: 'list', component: PatientListComponent },
          { path: 'view', component: ViewreportComponent },
          { path: 'view/:id', component: ViewreportComponent },
          { path: 'nav', component: NewpatientNavigationComponent },
          { path: 'data/:id', component: PatientdataComponent },
          { path: 'patient-report/:id', component: PatientReportComponent },
          { path: 'new/:id', component: AddPatientComponent },

        ],
=======
          }],
>>>>>>> 9130a70c9e69368cffcfbcecbe455856aabd3d52
>>>>>>> 406d7c7e8c24334b66e3aaad3f856b67f74f1757
      },
      {
        path: 'frontdesk',
        component: FrontdeskMainComponent,
        children: [
          { path: '', redirectTo: 'frontdeskdetails', pathMatch: 'full' },

<<<<<<< HEAD
          { path: 'frontdetails', component: FrontdeskDetailsComponent },
          { path: 'frontdetails/:id', component: FrontdeskDetailsComponent },
=======
          { path: 'frontdetails', component: FrontdeskDetailsComponent, canActivate: [AuthRouteGaurdService] },
          { path: 'frontdetails/:id', component: FrontdeskDetailsComponent, canActivate: [AuthRouteGaurdService] },
>>>>>>> 9130a70c9e69368cffcfbcecbe455856aabd3d52
          {
            path: 'frontdesk-registration',
            component: FrontdeskRegistrationComponent,
            canActivate: [AuthRouteGaurdService]
          },
<<<<<<< HEAD
          {
            path: 'frontdeskregistration/:id',
            component: FrontdeskRegistrationComponent,
          },
          {
            path: 'frontdeskregistration/:id',
            component: FrontdeskRegistrationComponent,
            canActivate: [AuthRouteGaurdService],
          },
          {
            path: 'frontdeskregistration/:id',
            component: FrontdeskRegistrationComponent,
          },
=======
          // {
          //   path: 'frontdeskregistration/:id',
          //   component: FrontdeskRegistrationComponent,
          //   canActivate: [AuthRouteGaurdService]
          // },
          // {
          //   path: 'frontdeskregistration/:id',
          //   component: FrontdeskRegistrationComponent,
          //   canActivate: [AuthRouteGaurdService],
          // },
          // {
          //   path: 'frontdeskregistration/:id',
          //   component: FrontdeskRegistrationComponent,

          // },
>>>>>>> 9130a70c9e69368cffcfbcecbe455856aabd3d52
          {
            path: 'frontdesk-registration/:id',
            component: FrontdeskRegistrationComponent,
            canActivate: [AuthRouteGaurdService],
          },
          {
            path: 'resetpassword/:userName',
            component: FrontdeskResetPasswordComponent,
            canActivate: [AuthRouteGaurdService]
          },
          {
            path: 'frontdesklist/:id',
            component: FrontdesklistComponent,
            canActivate: [AuthRouteGaurdService]
          },
          {
            path: 'frontdesklist',
            component: FrontdesklistComponent,
            canActivate: [AuthRouteGaurdService]
          },

          {
            path: 'frontdeskpasswordChange/:userName',
            component: FrontdeskPasswordChangeComponent,
            canActivate: [AuthRouteGaurdService]
          },
          { path: 'forgetpassword', component: ForgetpasswordComponent },
          { path: 'otp/:userName', component: OtpComponent },
<<<<<<< HEAD
=======
          {
            path: 'frontdeskpasswordChange',
            component: FrontdeskPasswordChangeComponent
          },
>>>>>>> 9130a70c9e69368cffcfbcecbe455856aabd3d52
          {
            path: 'resetpassword/:userName',
            component: FrontdeskResetPasswordComponent,
          },
          {
            path: 'changepassword/:id',
            component: FrontdeskResetPasswordComponent,
          },
          { path: 'contact', component: ContactComponent }

        ],
      },
      {
        path: 'admin',
        component: AdminMainComponent,
        children: [
          { path: '', redirectTo: 'admindetails', pathMatch: 'full' },
          {
            path: 'admin-registration',
            component: AdminRegistrationComponent,
            canActivate: [AuthRouteGaurdService]
          },
        
          {
            path: 'admin-registration/:id',
            component: AdminRegistrationComponent,
            canActivate: [AuthRouteGaurdService]
          },
          {
            path: 'adminlist',
            component: AdminListComponent,
            canActivate: [AuthRouteGaurdService]
          },
          {
            path: 'admin-details',
            component: AdminDetailsComponent,
            canActivate: [AuthRouteGaurdService]
          },
          {
            path: 'admin-details/:id',
            component: AdminDetailsComponent,
            canActivate: [AuthRouteGaurdService]
          }
        ]
      }
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
