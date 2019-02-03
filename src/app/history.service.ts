import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HistoryRecord } from './history-record';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  getHistory(): Observable<HistoryRecord[]>
  {
    return this.http.get<HistoryRecord[]>('http://localhost:3000/view_history'); // TODO: do not use hard url
  }
}
