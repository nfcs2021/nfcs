import { Component, OnInit } from '@angular/core';
import { Patient, SearchModel } from '../../patinet-contents/module/Patient';
import { PatientService } from '../../services/patient.service';
import { SearchModel1 } from '../frontdeskmodule/Employee';

@Component({
  selector: 'app-frontdesklist',
  templateUrl: './frontdesklist.component.html',
  styleUrls: ['./frontdesklist.component.css']
})
export class FrontdesklistComponent implements OnInit {
  posts: Array<Patient>;
  model:SearchModel =  new SearchModel();
  
  patientsData:any;
  dropdown:boolean[]=[];
  page: number = 1;
  tatalRec: string;


  constructor(private service:PatientService) { }

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
