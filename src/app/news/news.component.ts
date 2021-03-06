import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private NewsComing: NewsService ) { }

  public news = [];
  
  ngOnInit() {
    this.NewsComing.getNews().subscribe(data => this.news = data);
  }

}
