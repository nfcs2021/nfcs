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

    return this.http.get<any>(environment.apiUrl+'register/'+id, {

      headers: httpheaders,
    });
  }
getFrontDeskData(email:any){
  const httpheaders = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });
  return this.http.get<any>(environment.apiUrl+'registerByUser/'+email, {
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

  frontDeskLoginInfromation(loginData:any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<any>(environment.apiUrl+'logindet/',loginData,{
      headers: httpheaders,
    });
  }
  

  changePassword(data:any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.put<any>(environment.apiUrl+'updatePassword',data,{

      headers: httpheaders,
    });
  }


  create(data:any){
    // const httpheaders = new HttpHeaders({
    //   Authorization: 'Bearer ' + localStorage.getItem('token'),
    // });
    return this.http.post(environment.apiUrl+'getmail',data
    );
  //   return this.http.get(environment.apiUrl+'getcontact',data)
    
   }
 

  

requestotp(data:any){
 return this.http.post(environment.apiUrl+'request_otp',data)
}

 verifyOtp(otp:any) {
  return this.http.post(environment.apiUrl+'verify_otp',otp)
  }

  forgotPassword(data:any) {
    return this.http.put(environment.apiUrl+'updatePassword',data);
  }


  

}
