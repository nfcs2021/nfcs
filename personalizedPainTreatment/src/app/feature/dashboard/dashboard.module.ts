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
import { NewpatientNavigationComponent } from './patinet-contents/newpatient-navigation/newpatient-navigation.component';
import { FrontdeskLoginComponent } from './frontdesk-login/frontdesk-login.component';
import { PatientListComponent } from './patinet-contents/patient-list/patient-list.component';
import { ViewreportComponent } from './patinet-contents/viewreport/viewreport.component';
import { PatientdataComponent } from './patinet-contents/patientdata/patientdata.component';
import { PatientReportComponent } from './patinet-contents/patient-report/patient-report.component';
import { FrontdeskMainComponent } from './frontdesk-contents/frontdesk-main/frontdesk-main.component';
import { FrontdeskDetailsComponent } from './frontdesk-contents/frontdesk-details/frontdesk-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdvanceSearchPipe } from './pipes/advance-search.pipe';
import { DateSearchPipe } from './pipes/date-search.pipe';
import { FrontdeskRegistrationComponent } from './frontdesk-contents/frontdesk-registration/frontdesk-registration.component';
import { FrontdesklistComponent } from './frontdesk-contents/frontdesklist/frontdesklist.component';
import { FrontdeskpipePipe } from './frontdesk-contents/pipes/frontdeskpipe.pipe';
import { ForgetpasswordComponent } from './frontdesk-contents/forgetpassword/forgetpassword.component';
import { OtpComponent } from './frontdesk-contents/otp/otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { ContactComponent } from './frontdesk-contents/contact/contact.component';
import { FrontdeskResetPasswordComponent } from './frontdesk-contents/frontdesk-reset-password/frontdesk-reset-password.component';
import { FrontdeskPasswordChangeComponent } from './frontdesk-contents/frontdesk-password-change/frontdesk-password-change.component';
import { AdminMainComponent } from './admin-contents/admin-main/admin-main.component';
import { AdminListComponent } from './admin-contents/admin-list/admin-list.component';
import { AdminDetailsComponent } from './admin-contents/admin-details/admin-details.component';
import { AdminRegistrationComponent } from './admin-contents/admin-registration/admin-registration.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    MainLayoutComponent,
    AddPatientComponent,
    PatientMainComponent,
    PatientSurveyFormComponent,
    NewpatientNavigationComponent,
    FrontdeskLoginComponent,
    PatientListComponent,
    ViewreportComponent,
    PatientdataComponent,
    ViewreportComponent,
    PatientReportComponent,
    FrontdeskMainComponent,
    FrontdeskDetailsComponent,
    AdvanceSearchPipe,
    FrontdeskRegistrationComponent,
    FrontdesklistComponent,
    FrontdeskpipePipe,
    ForgetpasswordComponent,
    OtpComponent,
    DateSearchPipe,
    FrontdeskRegistrationComponent,
      ContactComponent,
    FrontdeskResetPasswordComponent,
    FrontdeskPasswordChangeComponent,
    AdminMainComponent,
    AdminListComponent,
    AdminDetailsComponent,
    AdminRegistrationComponent


  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
   NgxPaginationModule,
   NgOtpInputModule,
   HttpClientModule,


  ],
})
export class DashboardModule {}
