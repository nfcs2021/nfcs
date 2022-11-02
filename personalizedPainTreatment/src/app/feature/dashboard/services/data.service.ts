import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class DataService {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
 
 
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
=======
 
 
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
=======
 
 
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
  constructor(private http: HttpClient) {}
  login(data: any): Observable<any> {
    localStorage.setItem('loginEmail', data.email);
    return this.http.post<any>(environment.apiUrl + 'login', data);
  }
  getUserData(id: any): Observable<any> {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
<<<<<<< HEAD

    return this.http.get<any>(environment.apiUrl + 'register/' + id, {
=======
    return this.http.get<any>(environment.apiUrl+'register/'+id, {
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
      headers: httpheaders,
    });
  }
getFrontDeskData(email:any){
  const httpheaders = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });
  return this.http.get<any>(environment.apiUrl+'registerBymail/'+email, {
    headers: httpheaders,
  });
}

<<<<<<< HEAD
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
=======
  frontDeskLoginInfromation(loginData:any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<any>(environment.apiUrl+'logindet/',loginData,{
      headers: httpheaders,
    });
  }
  
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  changePassword(data:any) {
    const httpheaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.put<any>(environment.apiUrl+'updatePassword',data,{
      headers: httpheaders,
    });
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

=======
  
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
=======
  
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
=======
  
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
}
