import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  AuthenticationResultEvent = new EventEmitter();
  constructor(private dataservice: DataService, private router: Router) {}
  authenticate(data: any) {
    this.dataservice.userLogin(data).subscribe(
      (data) => {
        localStorage.setItem('token', data.token);
        this.isAuthenticated = true;
        this.AuthenticationResultEvent.emit(true);
      },
      (error) => {
        console.log(error);
        this.isAuthenticated = false;
        this.AuthenticationResultEvent.emit(false);
      }
    );
  }
}
