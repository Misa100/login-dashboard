import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalApiUrlService } from '../global-api-url.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http : HttpClient, private url : GlobalApiUrlService) { }

  REST_API = 'http://localhost:3000';

  login(data:any){
    var API_URL = this.url.REST_API+'/login'
    return this.http.post(API_URL, {data}, httpOptions)
  }

  googleLogin() {
    const googleAuthURL = this.url.REST_API+'/auth/google/callback';
    return this.http.get(googleAuthURL, {})
  }

}
