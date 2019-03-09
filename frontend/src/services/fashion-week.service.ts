import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {AllowedItems} from '../models/fashion-week/allowed-items';
import {HttpClient} from '@angular/common/http';
import {ClotheType} from '../models/fashion-week/clothe-type';

@Injectable({
  providedIn: 'root'
})
export class FashionWeekService {

  constructor(private httpClient: HttpClient) { }

  allowItems(): Observable<AllowedItems> {
    /* TODO : http call */
    return of(new AllowedItems([0, 1, 2], [0, 1, 2], [0, 1, 2]));
  }

  clothes(): Observable<ClotheType[]> {
    return this.httpClient.get<ClotheType[]>('assets/fashion_week/clothes.json');
  }
}
