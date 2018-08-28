import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public userInfo = [];

  constructor(private _userService: UserService, private GoToProfile: Router) { }

  openProfile (user){
    this.GoToProfile.navigate(['/users', user.nickname])
  }

  ngOnInit() {
    this._userService.getUsers().subscribe(data => this.userInfo = data);
  }

}
