import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-balance',
  templateUrl: './leave-balance.component.html',
  styleUrls: ['./leave-balance.component.css']
})
export class LeaveBalanceComponent implements OnInit {
 
  
  constructor( private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/home/leaverequests/leavebalance']);
  }

}
