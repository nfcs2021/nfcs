import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  login(data: any): Observable<any> {
    localStorage.setItem('loginEmail', data.email);
    return this.http.post<any>(environment.apiUrl + 'login', data);
  }
  getUserData(User_Name: any): Observable<any> {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    alert(1);
    return this.http.get<any>(
      environment.apiUrl + 'registerByUser/' + User_Name,
      {
        headers: httpheaders,
      }
    );
  }
  // getFrontDeskData(email: any) {
  //   const httpheaders = new HttpHeaders({
  //     Authorization: 'Bearer ' + localStorage.getItem('token'),
  //   });
  //   return this.http.get<any>(environment.apiUrl + 'registerBymail/' + email, {
  //     headers: httpheaders,
  //   });
  // }

  frontDeskLoginInfromation(loginData: any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<any>(environment.apiUrl + 'logindet/', loginData, {
      headers: httpheaders,
    });
  }
}
