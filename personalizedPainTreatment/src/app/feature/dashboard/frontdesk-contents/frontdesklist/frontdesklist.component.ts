import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { AuthService } from '../../services/auth.service';
import {
  FrontdeskEmployee,
  SearchModel1,
} from '../frontdesk-model/frontdesk-model';
import { DataService } from '../../services/data.service';

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
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getRegisterData();
  }
  troggle(i: any) {
    this.dropdown[i] = !this.dropdown[i];
  }
  getRegisterData() {
    this.service.getFrontdeskData().subscribe((data) => {
      this.frontDesKList = data;
      console.log(data);
      
    },err =>{
      console.log(err);
      
    });
  }
}
