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
  getUserData(id: any): Observable<any> {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.get<any>(environment.apiUrl + 'register/' + id, {
      headers: httpheaders,
    });
  }

  downloadFile(data: any):Observable<any> {
    alert(1)
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<Blob>(environment.apiUrl + 'file/' + data, {
      headers: httpheaders,
      observe: 'response',
    });
  }
}
