import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaverequest-main',
  templateUrl: './leaverequest-main.component.html',
  styleUrls: ['./leaverequest-main.component.css']
})
export class LeaverequestMainComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/home/leaverequests/leavebalance']);
  }

}
