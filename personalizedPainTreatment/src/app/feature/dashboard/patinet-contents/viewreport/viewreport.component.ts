import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrls: ['./viewreport.component.css']
})
export class ViewreportComponent implements OnInit {
  routerId:any;
  patientsRecordData:any;
  constructor(
    private route:ActivatedRoute,
    private service:PatientService
  ) { }

  ngOnInit(): void {
    this.routeId();
    this.patientRecordData();
  }
  routeId() {
    this.route.params.subscribe(params => {
      this.routerId = +params['id']; // (+) converts string 'id' to a number
      console.log(this.routerId);
    });
  }

   patientRecordData(){
  this.service.getPatientRecordData().subscribe(
    data =>{
      this.patientsRecordData=data;
      console.log(data);
    },err =>{
      console.log(err);
      
    }
  )
   }

}
