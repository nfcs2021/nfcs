import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticate = false;
  authenticationEvent = new EventEmitter<boolean>();
  constructor(private dataService: DataService, private router: Router) {}
  authontication(data: any) {
    this.dataService.login(data).subscribe(
      (data) => {
        localStorage.setItem('token', data.access_token);
        console.log(data.access_token);
        this.dataService.getUserData();
        this.isAuthenticate = true;
        this.authenticationEvent.emit(true);
      },
      (error) => {
        console.log(error);
        this.isAuthenticate = false;
        this.authenticationEvent.emit(false);
      }
    );
  }
  loggedIn() {
    this.dataService.getUserData();
    return !!localStorage.getItem('token');
  }
  logout() {
    // console.log("Logged Out called");
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('role');
    localStorage.clear();
    this.router.navigate(['/']);
    // location.reload();
  }
}
