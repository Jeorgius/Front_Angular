import { Component, OnInit } from '@angular/core';
import { UserReg } from '../user-detail/userReg';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userReg = new UserReg ('','','','','','', false);

  constructor(private register: RegisterService) { }

  ngOnInit() {
  }

  submitReg(){
    this.register.regUser(this.userReg)
    .subscribe(data => console.log("YES", data),
               error => console.log(error))
  }

}
