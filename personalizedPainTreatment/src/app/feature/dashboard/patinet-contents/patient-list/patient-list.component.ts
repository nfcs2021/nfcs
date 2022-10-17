import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient, SearchModel } from '../module/Patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  posts: Array<Patient>;
  model:SearchModel =  new SearchModel();
  patientsData:any;
  dropdown:boolean[]=[];
  page: number = 1;
  tatalRec: string;
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
      },err =>{
        console.log(err);

      }
    )
  }
}
