import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-newpatient-navigation',
  templateUrl: './newpatient-navigation.component.html',
  styleUrls: ['./newpatient-navigation.component.css'],
})
export class NewpatientNavigationComponent implements OnInit {
  userdata: any;
  role: any;

  pcp: any;


  constructor(private dataService: DataService) {

  }


  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    console.log(this.role);
  }
}
