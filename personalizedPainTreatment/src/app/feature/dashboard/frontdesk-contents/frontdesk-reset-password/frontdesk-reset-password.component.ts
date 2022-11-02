import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontdesk-reset-password',
  templateUrl: './frontdesk-reset-password.component.html',
  styleUrls: ['./frontdesk-reset-password.component.css']
})
export class FrontdeskResetPasswordComponent implements OnInit {

  name: any;

  constructor() {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
  }

}
