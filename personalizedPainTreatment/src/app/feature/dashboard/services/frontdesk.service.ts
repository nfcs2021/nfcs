import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class FrontdeskService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  updateFrontdeskData(data: any, id: any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.put<any>(this.apiUrl + 'register/' + id, data, {
      headers: httpheaders,
    });
  }
  getLoginData(email: any): Observable<any> {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(environment.apiUrl + 'logindet/' + email, {
      headers: httpheaders,
    });
  }
  saveLoginDetails(data: any): Observable<any> {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<any>(environment.apiUrl + 'logindet', data, {
      headers: httpheaders,
    });
  }
  getFrontdeskData(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer' + localStorage.getItem('token'),
    });
    return this.http.get<any>(environment.apiUrl + 'register', {
      headers: httpHeaders,
    });
  }
}
