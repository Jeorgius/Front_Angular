import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private PhotosComing: PhotosService ) { }
  public Photos = [];

  ngOnInit() {
    this.PhotosComing.getPhotos().subscribe(data => this.Photos = data);
  }

}
