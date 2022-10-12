import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  apiUrl='http://127.0.0.1:8000/api/patientData';

  constructor(private http:HttpClient) { }

  savePatientData(data: any):Observable<any> {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<any>(this.apiUrl,data,{headers: httpheaders});
  }
  
  
}
