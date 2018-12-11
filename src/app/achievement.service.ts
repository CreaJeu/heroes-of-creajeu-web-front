import { Injectable } from '@angular/core';
import { DATA_ACHIEVEMENTS } from './mock-achievements'
import { Observable, of } from 'rxjs';
import { Achievement } from './achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  getAchievements(): Observable<Achievement[]> {
    return of(DATA_ACHIEVEMENTS);
  }

  constructor() { }
}
