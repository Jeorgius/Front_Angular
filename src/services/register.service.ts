import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserReg } from '../app/user-detail/userReg';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  regResult = false;
  private JavaServer = "http://localhost:8080/api/register";

  constructor(private HTML : HttpClient) {}
  
  regUser(user : UserReg){
    return this.HTML.post<any>(this.JavaServer, user);
  }
}
