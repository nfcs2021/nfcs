import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  login(data: any): Observable<any> {
    localStorage.setItem('loginEmail', data.email);
    return this.http.post<any>('http://127.0.0.1:8000/api/login', data);
  }

  getUserData(): Observable<any> {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    console.log('service :' + localStorage.getItem('token'));
    return this.http.get<any>('http://127.0.0.1:8000/api/me', {
      headers: httpheaders,
    });
  }
}
