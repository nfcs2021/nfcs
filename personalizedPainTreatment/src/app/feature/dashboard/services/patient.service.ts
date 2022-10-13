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
  
  
  apiUrl='http://127.0.0.1:8000/api/';

  constructor(private http:HttpClient) { }

  getById(id:any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
   return this.http.get(this.apiUrl+'patientData/'+id,{headers: httpheaders})
  }
  savePatientData(data: any):Observable<any> {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<any>(this.apiUrl+'patientData',data,{headers: httpheaders});
  }

  savePatientRecord(patientdata:any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<any>(this.apiUrl+'record',patientdata,{headers: httpheaders});
  }


  savePatientSurveyForm(data:any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<any>(this.apiUrl+'Questions',data,{headers: httpheaders});
  }

  saveSelectedParts(data:any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<any>(this.apiUrl+'select',data,{headers: httpheaders});
  }


  getPatientRecordData(id:any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(this.apiUrl+'record/'+id,{headers: httpheaders});
  }
  
  getPatientQuestionaryDataById(id: any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(this.apiUrl+'Questions/'+id,{headers: httpheaders});
  }
 
  getPatientDataById(id: any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(this.apiUrl+'patientData/'+id,{headers: httpheaders});
  }
  
  getRegistarPatientDataByEmail(patient_Email: any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(this.apiUrl+'register/email/'+patient_Email,{headers: httpheaders});
  }

  getPatientDataRecords(patient_Email: any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(this.apiUrl+'record/'+patient_Email,{headers: httpheaders});
  }

  getSelectedPartsById(id: any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(this.apiUrl+'select/'+id,{headers: httpheaders});
  }
}
