import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  name: any;
  pcp_Name: any;
  lastLogin: any;
  constructor() {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.pcp_Name = localStorage.getItem('PCP_Name');
    this.lastLogin = localStorage.getItem('lastLogin');
    // alert(this.lastLogin);
    console.log('main', this.name);
  }
}
