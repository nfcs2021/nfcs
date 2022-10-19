import { Component, OnInit } from '@angular/core';
import { Patient, SearchModel } from '../../patinet-contents/module/Patient';
import { PatientService } from '../../services/patient.service';
import { ThisReceiver } from '@angular/compiler';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-frontdesklist',
  templateUrl: './frontdesklist.component.html',
  styleUrls: ['./frontdesklist.component.css'],
})
export class FrontdesklistComponent implements OnInit {
  posts: Array<Patient>;
  model: SearchModel = new SearchModel();
  frontDesKData: any;
  dropdown: boolean[] = [];
  page: number = 1;
  tatalRec: string;
  constructor(
    private service: PatientService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getRegisterData();
  }
  troggle(i: any) {
    this.dropdown[i] = !this.dropdown[i];
  }
  getRegisterData() {
    this.authService.getAllRegistrationData().subscribe((data) => {
      console.log(data);
      this.frontDesKData = data;
    });
  }
}
