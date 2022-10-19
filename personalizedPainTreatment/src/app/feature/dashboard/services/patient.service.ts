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
  
  
  apiUrl=environment.apiUrl;
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

  updatePatientData(data:any,id:any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.put<any>(this.apiUrl+'patientData/'+id,data,{headers: httpheaders});
  }

  getAllPatientsData() {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(this.apiUrl+'patientData',{headers: httpheaders});
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
    return this.http.post<any>(this.apiUrl+'selectedanswer',data,{headers: httpheaders});
  }
  saveSelectedParts(data:any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<any>(this.apiUrl+'answer',data,{headers: httpheaders});
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
    return this.http.get<any>(this.apiUrl+'selectedanswer/'+id,{headers: httpheaders});
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
    return this.http.get<any>(this.apiUrl+'answer/'+id,{headers: httpheaders});
  }

  getAllPatientRecords() {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(this.apiUrl+'record/',{headers: httpheaders});
  }
}
