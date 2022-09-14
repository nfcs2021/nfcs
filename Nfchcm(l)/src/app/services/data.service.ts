import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }),
};
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  userLogin(data: any): Observable<any> {
    localStorage.setItem('loginEmail', data.email);
    console.log(data.email);
    console.log(data.userName);
    return this.http.post<any>(environment.userBaseUrl + 'authenticate', data);
  }
}
