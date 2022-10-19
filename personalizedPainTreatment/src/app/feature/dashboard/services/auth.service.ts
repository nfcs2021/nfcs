import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticate = false;
  authenticationEvent = new EventEmitter<boolean>();
  getUserData = new EventEmitter<any>();
  name: any;
  constructor(
    private dataService: DataService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  loginUser(data: any) {
    localStorage.removeItem('token');
    return this.http.post<any>(environment.apiUrl + 'login', data);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('role');
    console.log(localStorage.getItem('token'));
    localStorage.clear();
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
  sentEvent() {
    this.getUserData.emit();
  }
  getEvent() {
    return this.getUserData.asObservable();
  }
}
