import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { photoList } from '../app/photos/photoInterface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private JavaServer = '../assets/data/photos.json';

  constructor(private HTML: HttpClient) { }

  getPhotos(){
    return this.HTML.get<photoList[]>(this.JavaServer);
  }

}
