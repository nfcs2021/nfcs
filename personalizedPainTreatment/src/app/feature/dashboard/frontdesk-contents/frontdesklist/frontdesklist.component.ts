import { Component, OnInit } from '@angular/core';
import { Patient, SearchModel } from '../../patinet-contents/module/Patient';
import { PatientService } from '../../services/patient.service';
import { AuthService } from '../../services/auth.service';
<<<<<<< HEAD
import { FrontdeskEmployee, SearchModel1 } from '../frontdesk-model/frontdesk-model';
=======
import {
  FrontdeskEmployee,
  SearchModel1,
} from '../frontdesk-model/frontdesk-model';
import { DataService } from '../../services/data.service';
>>>>>>> 9130a70c9e69368cffcfbcecbe455856aabd3d52

@Component({
  selector: 'app-frontdesklist',
  templateUrl: './frontdesklist.component.html',
  styleUrls: ['./frontdesklist.component.css'],
})
export class FrontdesklistComponent implements OnInit {
  frontDesKList: Array<FrontdeskEmployee>;
  model: SearchModel1 = new SearchModel1();
  dropdown: boolean[] = [];
  page: number = 1;
  totalRec: string;
<<<<<<< HEAD
  constructor(
    private service: PatientService,
    private authService: AuthService
  ) {}
=======
  constructor(private service: DataService) {}
>>>>>>> 9130a70c9e69368cffcfbcecbe455856aabd3d52

  ngOnInit(): void {
    this.getRegisterData();
  }
  troggle(i: any) {
    this.dropdown[i] = !this.dropdown[i];
  }
  getRegisterData() {
<<<<<<< HEAD
    this.authService.getAllRegistrationData().subscribe((data) => {
      console.log(data);
=======
    this.service.getFrontdeskData().subscribe((data) => {
>>>>>>> 9130a70c9e69368cffcfbcecbe455856aabd3d52
      this.frontDesKList = data;
      console.log(data);
      
    },err =>{
      console.log(err);
      
    });
  }
}
