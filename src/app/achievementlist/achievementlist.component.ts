import { Component, OnInit } from '@angular/core';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service'

@Component({
  selector: 'app-achievementlist',
  templateUrl: './achievementlist.component.html',
  styleUrls: ['./achievementlist.component.css']
})
export class AchievementlistComponent implements OnInit {

  constructor(private achievementService: AchievementService) { }

  achievements: Achievement[];

  ngOnInit() {
    this.achievementService.getAchievements()
      .subscribe(_achievements => this.achievements = _achievements); 
  }

}
