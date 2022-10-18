import { ChangeDetectorRef } from '@angular/core';
import { Component, OnChanges, OnInit } from '@angular/core';
import { data } from 'jquery';
import { AuthService } from 'src/app/feature/dashboard/services/auth.service';
import { DataService } from 'src/app/feature/dashboard/services/data.service';
import { NavnsideWrapperComponent } from '../navnside-wrapper/navnside-wrapper.component';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit, OnChanges {
  // isLoggidIn: boolean = this.authService.loggedIn();
  // name = localStorage.getItem('registrationData');
  name: any;
  user: any;
  pcp: string | null;
  text = 'welcome';
  loggedIn = false;
  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authService.getEvent().subscribe(() => {
      this.getloginData();
      this.loggedIn = true;
      console.log(this.loggedIn);
    });
  }
  ngOnChanges() {}
  getloginData() {
    this.dataService.getUserData().subscribe((data) => {
      console.log('header :' + data.name);
      localStorage.setItem('username', data.name);
      this.name = localStorage.getItem('username');
      this.pcp = localStorage.getItem('pcpData');
    });
  }
  logOut() {
    this.authService.logout();
  }
}
