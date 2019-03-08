import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {AllowedItems} from '../models/fashion-week/allowed-items';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FashionWeekService {

  constructor(private httpClient: HttpClient) { }

  allowItems(): Observable<AllowedItems> {
    /* TODO : http call */
    return of(new AllowedItems([0, 1, 2], [0, 1, 2], [0, 1, 2]));
  }

  clothes() {
    return this.httpClient.get('assets/json/general.json');
  }
}
