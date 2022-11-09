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
  @Input('data1') data1: any;
  @Input('pcp_Name') pcp_Name: any;
  @Input('lastlogin') Last_Login: any;
  name: any;
  user: any;
  pcp: any;
  text = 'welcome';
  loggedIn = false;
  presentLogin: any;
  data: any;
  frontdeskData: any;
  firstName: any;
  btndisable: boolean;
  id: any;
  imageUrl: string;
  localData: any;
  src: any;
  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private ref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.localData = localStorage.getItem('id');
    this.dataService.getUserData(localStorage.getItem('id')).subscribe(
      (res) => {
        console.log(res);
        let imageBinary = res.Profile_image; //image binary data response from api
        //  let imageBase64String= btoa(imageBinary);
        this.imageUrl = 'data:image/jpeg;base64,' + imageBinary;
        console.log(this.src);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnChanges() {
    this.name = this.data1;
    this.pcp = this.pcp_Name;
    // alert(this.Last_Login);
  }

  logOut() {
    this.authService.logout();
  }
}
