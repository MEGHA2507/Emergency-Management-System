import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getCountriesList(){
    let headers = new Headers();
    headers.append("X-CSCAPI-KEY", "API_KEY");
   
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
