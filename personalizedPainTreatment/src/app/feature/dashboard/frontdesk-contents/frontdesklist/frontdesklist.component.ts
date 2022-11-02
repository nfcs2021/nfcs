import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { AuthService } from '../../services/auth.service';
import {
  FrontdeskEmployee,
  SearchModel1,
} from '../frontdesk-model/frontdesk-model';

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
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getRegisterData();
  }
  troggle(i: any) {
    this.dropdown[i] = !this.dropdown[i];
  }
  getRegisterData() {
    this.authService.getAllRegistrationData().subscribe((data) => {
      this.frontDesKList = data;
    });
  }
}
