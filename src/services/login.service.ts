import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private JavaServer = "https://localhost:8007/user";
  
  constructor(private HTTP : HttpClient) { }

  loginUser(){
    return this.HTTP.get<any>(this.JavaServer);
  }
}
