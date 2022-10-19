import { ChangeDetectorRef, Input } from '@angular/core';
import { Component, OnChanges, OnInit } from '@angular/core';
import { data } from 'jquery';
import { AuthService } from 'src/app/feature/dashboard/services/auth.service';
import { DataService } from 'src/app/feature/dashboard/services/data.service';
import { NavnsideWrapperComponent } from '../navnside-wrapper/navnside-wrapper.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit, OnChanges {
  // isLoggidIn: boolean = this.authService.loggedIn();
  // name = localStorage.getItem('registrationData');
  @Input('data1') data1:any;
  @Input('pcp_Name') pcp_Name:any;
  name: any;
  user: any;
<<<<<<< HEAD
  pcp: string | null;
  text = 'Welcome';
=======
  pcp: any ;
  text = 'welcome';
>>>>>>> cbd0b9e05307126babb8c908a9a8829735784c83
  loggedIn = false;
  presentLogin: any;
  data: any;
  frontdeskData: any;
  firstName: any;
  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
<<<<<<< HEAD
    const now = new Date();
    console.log(now);
    this.presentLogin = now;

    this.authService.getEvent().subscribe(() => {
      this.getloginData();
    });
  }

  ngOnChanges() {}
  getloginData() {
    this.firstName = localStorage.getItem('createdBy');
    var retrievedObject: any = localStorage.getItem('testObject');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    this.frontdeskData = JSON.parse(retrievedObject);
    console.log(this.data.First_Name);
=======
  }

  ngOnChanges() {
   this.name= this.data1;
   this.pcp=this.pcp_Name;
>>>>>>> cbd0b9e05307126babb8c908a9a8829735784c83
  }


  logOut() {
    this.authService.logout();
  }
}
