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
<<<<<<< HEAD
import { FrontdeskMainComponent } from './frontdesk-contents/frontdesk-main/frontdesk-main.component';
import { FrontdeskDetailsComponent } from './frontdesk-contents/frontdesk-details/frontdesk-details.component';

=======
import { NgxPaginationModule } from 'ngx-pagination';
import { AdvanceSearchPipe } from './pipes/advance-search.pipe';
>>>>>>> 199d990702cc6919ddb5ef846cbf0331e045bee9

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
<<<<<<< HEAD
    FrontdeskMainComponent,
    FrontdeskDetailsComponent
=======
    AdvanceSearchPipe
>>>>>>> 199d990702cc6919ddb5ef846cbf0331e045bee9

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxPaginationModule 
  ],
})
export class DashboardModule {}
