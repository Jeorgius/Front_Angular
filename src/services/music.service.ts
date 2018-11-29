import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { musicList } from '../app/music/musicInterface';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private JavaServer = "http://localhost:8001/api/MusicGet";

  constructor(private HTML: HttpClient) {}

  getMusic() {
    return this.HTML.get<musicList[]>(this.JavaServer);
  }
}
