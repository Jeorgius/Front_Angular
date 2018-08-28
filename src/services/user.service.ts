import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userList } from '../app/users/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private UserDataHTML = '../assets/data/users.json'

  constructor(private JavaServer: HttpClient) { }

  getUsers(){
      return this.JavaServer.get<userList[]>(this.UserDataHTML);
  }
}
