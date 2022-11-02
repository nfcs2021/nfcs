import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  name: any;
  pcp_Name: any;
  lastlogin: any;
  constructor() {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.pcp_Name = localStorage.getItem('PCP_Name');
    this.lastlogin = localStorage.getItem('lastLogin');
    console.log('main', this.name);
  }
}
