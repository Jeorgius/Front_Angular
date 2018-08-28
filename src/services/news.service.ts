import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newsList } from '../app/news/newsInterface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private JavaServer = '../assets/data/news.json';

  constructor(private HTML: HttpClient) { }
  getNews (){
    return this.HTML.get<newsList[]>(this.JavaServer);
  }

}


