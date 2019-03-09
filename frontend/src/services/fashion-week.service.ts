import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FashionWeekService {

  constructor(private httpClient: HttpClient) { }

  clothes(): Observable<string[][]> {
    return this.httpClient.get<string[][]>('assets/fashion_week/files.json');
  }
}
