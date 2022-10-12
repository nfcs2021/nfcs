import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { patientList } from '../module/Patient1';

@Component({
  selector: 'app-patientdata',
  templateUrl: './patientdata.component.html',
  styleUrls: ['./patientdata.component.css']
})
export class PatientdataComponent implements OnInit {

patientList: any;
totalLength:any;
   page:number=1

  constructor(private patientservice:PatientService) { }

  ngOnInit(): void {
    this.retrivalpatientList
  }
  retrivalpatientList() {
    
    this.patientservice.getAll()
    .subscribe((data) =>{
      this.patientList=data;
      console.log(this.patientList);

      
      
    },
    error =>{
      console.log(error)
    });
  }
}
