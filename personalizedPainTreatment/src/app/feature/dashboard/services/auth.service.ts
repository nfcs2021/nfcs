import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticate = false;
  authenticationEvent = new EventEmitter<boolean>();
  getUserData = new EventEmitter<any>();
  name: any;
  apiUrl = environment.apiUrl;
  constructor(
    private dataService: DataService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  loginUser(data: any) {
    localStorage.removeItem('token');
    alert(1)
    return this.http.post<any>(environment.apiUrl + 'login', data);
  }

  saveFrontDeskData(data: any): Observable<any> {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<any>(this.apiUrl + 'register', data, {
      headers: httpheaders,
    });
  }
  getAllRegistrationData() {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(this.apiUrl + 'allregisterData', {
      headers: httpheaders,
    });
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    console.log('logout.................' + localStorage.getItem('token'));
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
