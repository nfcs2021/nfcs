import { AuthService } from './../../../feature/dashboard/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../service/sidebar.service';
import { EmployeeService } from 'src/app/feature/dashboard/services/employee.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  isLoggedIn: boolean = this._auth.isLoggedIn();
employeeData:any;
  constructor(private _sideBarService: SidebarService,
     public _auth: AuthService,
     private employeeService:EmployeeService
     ) { }
  ngOnInit(): void {
    console.log(localStorage.getItem("loginEmployeeData"));
    
  }



  toggleSidebar() {
    this._sideBarService.toggle();
  }
  logout(){
    this._auth.logout();
  }

}
