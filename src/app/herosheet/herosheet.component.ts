import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service'

@Component({
  selector: 'app-herosheet',
  templateUrl: './herosheet.component.html',
  styleUrls: ['./herosheet.component.css']
})
export class HerosheetComponent implements OnInit {

  constructor(private achievementService: AchievementService) {}

  private _hero : Hero;
  heroAchievements: Achievement[];

  get hero(): Hero { return this._hero; }

  @Input()
  set hero(h: Hero) {
    if(!h) return;
    this._hero = h;
    this.achievementService.getHeroAchievements(this._hero)
      .subscribe(_achievements => this.heroAchievements = _achievements);
  }

  ngOnInit() {
  }
}
