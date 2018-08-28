import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { storeList } from '../app/store/storeInterface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private JavaServer = '../assets/data/store.json';

  constructor( private HTML: HttpClient ) { }

  getItems() {
    return this.HTML.get<storeList[]>(this.JavaServer);
  }
}
