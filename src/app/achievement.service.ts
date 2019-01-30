import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Achievement } from './achievement';
import { Hero } from './hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private http: HttpClient) { }

  getAchievements(): Observable<Achievement[]> {
    var url = 'http://localhost:3000/achievements'; // TODO: do not use hardcoded hostname
    return this.http.get<Achievement[]>(url);
  }

  getHeroAchievements(hero: Hero): Observable<Achievement[]> {
    var url = `http://localhost:3000/rpc/get_hero_achievements`; // TODO: do not use hardcoded hostname
    var rpcParams = { target_hero_id: hero.id };
    return this.http.post<Achievement[]>(url, rpcParams);
  }
}
