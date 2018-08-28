import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  constructor(private MusicComing: MusicService) { }

  public Music = [];

  ngOnInit() {
    this.MusicComing.getMusic().subscribe(data => this.Music = data);
  }

}
