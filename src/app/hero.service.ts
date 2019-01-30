import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>
  {
    return this.http.get<Hero[]>('http://localhost:3000/view_heroes'); // TODO: do not use hard url
  }
}
