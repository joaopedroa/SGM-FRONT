import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  

  login(email:any, senha:any){

    let clientNameSecret = "sgm123:sgmsecret123";
    let criptografado = btoa(clientNameSecret);

    const headers_object = new HttpHeaders()
    .set("Authorization", "Basic " + criptografado)
    .set("Content-type", "application/x-www-form-urlencoded");

    const body = new HttpParams()
    .set('username', email)
    .set('password', senha)
    .set('grant_type', 'password');

    const httpOptions = {
      headers: headers_object
    };

    return this.http.post<any>(`${environment.apiUrl}/sgm-oauth-service/api/v1/oauth/token`, body, httpOptions);

  }
}
