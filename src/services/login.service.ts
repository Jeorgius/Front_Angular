import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private JavaServer = "http://localhost:8777/login/fb";
  
  constructor(private HTTP : HttpClient) { }

  loginUser(){
    return this.HTTP.get<any>(this.JavaServer);
  }
}
