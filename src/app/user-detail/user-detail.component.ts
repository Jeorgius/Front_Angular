import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public nickname;
  constructor(private CurrentLink: ActivatedRoute) { }

  ngOnInit() {
    let nickname = this.CurrentLink.snapshot.paramMap.get('nickname');
    this.nickname = nickname;
  }

}
