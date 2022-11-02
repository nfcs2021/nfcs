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
<<<<<<< HEAD
import { ContactComponent } from '../frontdesk-contents/contact/contact.component';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
=======
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
import { FrontdeskResetPasswordComponent } from '../frontdesk-contents/frontdesk-reset-password/frontdesk-reset-password.component';


=======
>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
=======
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
=======
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
>>>>>>> 9f893030e902c7a28acd39b6ac8c86e0ff969a8c

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            path: 'new/:id', component: AddPatientComponent,
            canActivate: [AuthRouteGaurdService]
          }
=======
=======
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
=======
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
            path: 'new/:id',
            component: AddPatientComponent,
            canActivate: [AuthRouteGaurdService],
          },

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
          { path: 'survey-form/:id', component: PatientSurveyFormComponent },
          { path: 'list', component: PatientListComponent },
          { path: 'view', component: ViewreportComponent },
          { path: 'view/:id', component: ViewreportComponent },
          { path: 'nav', component: NewpatientNavigationComponent },
          { path: 'data/:id', component: PatientdataComponent },
          { path: 'patient-report/:id', component: PatientReportComponent },
          { path: 'new/:id', component: AddPatientComponent },
<<<<<<< HEAD
=======

>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
=======
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
=======
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
        ],
      },
      {
        path: 'frontdesk',
        component: FrontdeskMainComponent,
        children: [
          { path: '', redirectTo: 'frontdeskdetails', pathMatch: 'full' },
          
          { path: 'frontdetails', component: FrontdeskDetailsComponent },
          { path: 'frontdetails/:id', component: FrontdeskDetailsComponent },
          {
            path: 'frontdesk-registration',
            component: FrontdeskRegistrationComponent,
<<<<<<< HEAD
            canActivate: [AuthRouteGaurdService]
=======
            canActivate: [AuthRouteGaurdService],
<<<<<<< HEAD
=======
          },
          {
            path: 'frontdeskregistration/:id',
            component: FrontdeskRegistrationComponent,
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
          },
          {
            path: 'frontdeskregistration/:id',
            component: FrontdeskRegistrationComponent,
<<<<<<< HEAD
=======
            canActivate: [AuthRouteGaurdService],
          },
          {
            path: 'frontdeskregistration/:id',
            component: FrontdeskRegistrationComponent,
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
>>>>>>> 9f893030e902c7a28acd39b6ac8c86e0ff969a8c
          },
          {
            path: 'frontdesk-registration/:id',
            component: FrontdeskRegistrationComponent,
            canActivate: [AuthRouteGaurdService]
          },
          
          { path: 'frontdesklist/:id', component: FrontdesklistComponent },
          { path: 'frontdesklist', component: FrontdesklistComponent },
<<<<<<< HEAD
          {path:'frontdeskpasswordChange/:userName',component:FrontdeskPasswordChangeComponent},
          {path:'forgetpassword',component:ForgetpasswordComponent},
          {path:'otp/:userName',component:OtpComponent}
=======
          {path:'frontdeskpasswordChange',component:FrontdeskPasswordChangeComponent}
=======
          { path: 'frontdesklist', component: FrontdesklistComponent },
<<<<<<< HEAD
          { path: 'forgetpassword', component: ForgetpasswordComponent },
          { path: 'otp', component: OtpComponent },
          {
            path: 'changepassword',
            component: FrontdeskResetPasswordComponent,
          },
          {
            path: 'changepassword/:id',
            component: FrontdeskResetPasswordComponent,
          },
=======
          {path:'forgetpassword',component:ForgetpasswordComponent},
<<<<<<< HEAD
          {path:'otp/:email',component:OtpComponent},
          {path:'contact',component:ContactComponent},
=======
          {path:'otp',component:OtpComponent}
>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
=======
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
=======
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
>>>>>>> 9f893030e902c7a28acd39b6ac8c86e0ff969a8c
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
export class DashboardRoutingModule {}
