import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
    
  headers = new HttpHeaders()
  .set('ApiKey', 'B180E86E-5D1A-4403-ABE0-A4030CAC2B5E');
       url = "https://helixapi20211129123604.azurewebsites.net/patients/"

    getpatients(id: any){
      console.log("URL", id);
      
      return this.http.get<any[]>(this.url + id, {'headers': this.headers})
      
     
    }
  
}



