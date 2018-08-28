import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor( private ProductsComing: StoreService) { }

  public Products = [];

  ngOnInit() {
    this.ProductsComing.getItems().subscribe(data => this.Products = data);
  }

}
