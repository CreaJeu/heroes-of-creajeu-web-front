import { Injectable } from '@angular/core';
import { DATA_ACHIEVEMENTS } from './mock-achievements'
import { Observable, of } from 'rxjs';
import { Achievement } from './achievement';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  getAchievements(): Observable<Achievement[]> {
    return of(DATA_ACHIEVEMENTS);
  }

  getHeroAchievements(hero: Hero): Observable<Achievement[]> {
    return of(DATA_ACHIEVEMENTS); // TODO: filter to get only the achievements unlocked by the selected hero
  }

  constructor() { }
}
