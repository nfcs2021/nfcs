import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrls: ['./viewreport.component.css'],
})
export class ViewreportComponent implements OnInit {
  routerId: any;
  patientsRecordData: any;
  constructor(private route: ActivatedRoute, private service: PatientService) {}

  ngOnInit(): void {
    this.routeId();
  }
  routeId() {
    this.route.params.subscribe((params) => {
      this.routerId = +params['id']; // (+) converts string 'id' to a number
      console.log(this.routerId);
      this.patientRecordData(this.routerId);
    });
  }

  patientRecordData(id: any) {
    this.service.getPatientRecordData(id).subscribe(
      (data) => {
        this.patientsRecordData = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
