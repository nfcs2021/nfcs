import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
 
  constructor(private http: HttpClient) { }
  
  getAllAdminData() {
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer' + localStorage.getItem('token'),
    });
    return this.http.get<any>(environment.apiUrl + 'getadminregister', {
      headers: httpHeaders
    });
  }
  getAdminData(id: any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    return this.http.get<any>(environment.apiUrl+'register/'+id, {

      headers: httpheaders,
    });
  }
 

  getAllRegistrationData() {
    const httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(environment.apiUrl + 'allregisterData', {
      headers: httpHeaders,
    });
  }
  saveAdminData(fileData2: any) {
  
    return this.http.post<any>(environment.apiUrl + 'adminregister',fileData2);
  }




  }

  

