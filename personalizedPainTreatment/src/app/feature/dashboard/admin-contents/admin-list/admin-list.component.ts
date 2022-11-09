import { Component, OnInit } from '@angular/core';

import { Patient, PatientRecord, SearchDate, SearchModel } from '../../patinet-contents/module/Patient';
import { AdminService } from '../../services/admin.service';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  posts: Array<Patient>;
  model:SearchModel =  new SearchModel();
  dateModel:SearchDate = new SearchDate();
  adminData:any;
  dropdown:boolean[]=[];
  page: number = 1;
  tatalRec: string;
  patientRecordData: PatientRecord[];
  constructor(
    private service:AdminService
  ) { }

  ngOnInit(): void {
   this.getAllAdmin();
  }
  troggle(i:any){
    this.dropdown[i]=!this.dropdown[i];
  }
  getAllAdmin(){
    this.service.getAllAdminData().subscribe(
      res =>{
        console.log(res);
        this.posts=res
        this.adminData=res;
      },err =>{
        console.log(err);

      }
    )
  }


}
