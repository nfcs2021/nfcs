import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  role:any;
  report=false;
  patientRecordData: PatientRecord[];
  constructor(
    private service:PatientService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllPatient();
    this.role=localStorage.getItem('role');
   
  }

  checkCurrentLesson1() {
    if (this.role==='admin') { 
     return false;
    }
    else {
     return true;
    }
    }
    click(id:any){
    this.router.navigateByUrl('/patient/patient-profile/'+id);
  }
  getAllPatient(){
    this.service.getAllPatientsData().subscribe(
      res =>{
        console.log(res);
        this.posts=res
        this.patientsData=res;
      },err =>{
        console.log(err);

      }
    )
  }

  
}
