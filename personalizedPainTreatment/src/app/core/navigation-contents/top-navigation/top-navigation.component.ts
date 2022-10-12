import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from 'src/app/feature/dashboard/services/auth.service';
import { DataService } from 'src/app/feature/dashboard/services/data.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit, OnChanges {
  isLoggidIn: boolean = this.authService.loggedIn();

  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.isLoggidIn == true) {
      // this.dataService.getUserData(data:any).subscribe((data) => {
      //   console.log(data);
      // });
    }
  }
  ngOnChanges() {
  }
  logOut() {
    this.authService.logout();
  }
}
