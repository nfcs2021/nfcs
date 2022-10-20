import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient, PatientRecord, SearchDate, SearchModel } from '../module/Patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  posts: Array<Patient>;
  model:SearchModel =  new SearchModel();
  dateModel:SearchDate = new SearchDate();
  patientsData:any;
  dropdown:boolean[]=[];
  page: number = 1;
  tatalRec: string;
  patientRecordData: PatientRecord[];
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
        this.posts=res
        this.patientsData=res;
        this.getAllPatientRecords();
      },err =>{
        console.log(err);

      }
    )
  }

  getAllPatientRecords(){
    this.service.getAllPatientRecords().subscribe(
      data =>{
        this.patientRecordData=data;
    console.log(data);

      },err =>{
        console.log(err);

      }
    )
  }
}
