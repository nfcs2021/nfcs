import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  url :string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";
  constructor(private httpclient: HttpClient) { }

  allCountries(): Observable<any>{
    return this.httpclient.get(this.url);

    }

     httpOptions = {
      headers: new HttpHeaders({
          'Content-type': 'application/json',
          'X-CSCAPI-KEY': 'MGZMRlZLbkZ0SmNiOGkxQzBlREFLYjBKdlZZU1BnRmlRbGI3N2lvVg=='
      })
      };
    getCountry(): Observable<any>{
      return this.httpclient.get<any>('https://api.countrystatecity.in/v1/countries', {headers: this.httpOptions.headers})
    }

    getStateOfSelectedCountry(countryIso: string): Observable<any>{
      return this.httpclient.get(`https://api.countrystatecity.in/v1/countries/${countryIso}/states`,{headers: this.httpOptions.headers} )
    }

    getCitiesOfSelectedState(countryIso: any, stateIso: any): Observable<any>{
      return this.httpclient.get(`https://api.countrystatecity.in/v1/countries/${countryIso}/states/${stateIso}/cities`, {headers: this.httpOptions.headers} )
    }
  }
