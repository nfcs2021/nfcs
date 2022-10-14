import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patientsData:any;
  dropdown:boolean[]=[];
  constructor(
    private service:PatientService
  ) { }

  ngOnInit(): void {

    this.getAllPatient();
  }
  troggle(i:any){
    this.dropdown[i]=!this.dropdown[i];
  }
  getAllPatient(){
    this.service.getAllPatientsData().subscribe(
      res =>{
        console.log(res);
        this.patientsData=res;
      },err =>{
        console.log(err);
        
      }
    )
  }
}
