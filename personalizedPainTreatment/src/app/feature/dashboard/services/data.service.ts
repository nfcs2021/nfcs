import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  login(data: any): Observable<any> {
    localStorage.setItem('loginEmail', data.email);
    return this.http.post<any>(environment.apiUrl+'login', data);
  }
  getUserData(id:any): Observable<any> {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
<<<<<<< HEAD
    return this.http.get<any>(environment.apiUrl+'me', {
=======
    return this.http.get<any>(environment.apiUrl+'registerData/'+id, {
>>>>>>> cbd0b9e05307126babb8c908a9a8829735784c83
      headers: httpheaders,
    });
  }
}
