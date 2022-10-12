import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions={
  headers:new  HttpHeaders({
    'Content-Type':'application/json',  
  })
}
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
 

  constructor(private http:HttpClient) { }
  getAll() {
   return this.http.get(environment.apiUrl,httpOptions)
  }
  savePatientData(data: any):Observable<any> {
    
    return this.http.post<any>(environment.apiUrl,data);
  }
  
  
}
