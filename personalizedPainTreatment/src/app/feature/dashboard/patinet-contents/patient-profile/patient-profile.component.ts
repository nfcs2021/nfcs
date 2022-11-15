import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient, SearchDate } from '../module/Patient';
import { PatientService } from '../../services/patient.service';
@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  posts: Array<Patient>;
  dateModel:SearchDate = new SearchDate();
  patientsData:any;
  routerId:any;
  constructor(
    private route:ActivatedRoute,
    private service:PatientService
    ) { }

  ngOnInit(): void {
        this.getRouterId();
  }
  getRouterId(){
    this.route.params.subscribe((params) => {
      this.routerId = +params['id']; // (+) converts string 'id' to a number
      this.retrivalpatientList(this.routerId);
      console.log(this.routerId);
    });
  }
  retrivalpatientList(id:any){
    this.service.getById(id).subscribe(
      res =>{
        console.log(res);
        this.patientsData=res;
        
      },err =>{
       console.log(err);
       
      });
  }
 
}
