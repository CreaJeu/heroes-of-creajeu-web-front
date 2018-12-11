import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero'
import { DATA_HEROES } from './mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> 
  {
    return of(DATA_HEROES);
  }

  constructor() { }
}
