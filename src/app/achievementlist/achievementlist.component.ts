import { Component, OnInit } from '@angular/core';
import { Achievement } from '../achievement';
import { DATA_ACHIEVEMENTS } from '../mock-achievements'

@Component({
  selector: 'app-achievementlist',
  templateUrl: './achievementlist.component.html',
  styleUrls: ['./achievementlist.component.css']
})
export class AchievementlistComponent implements OnInit {

  constructor() { }

  achievements: Achievement[] = DATA_ACHIEVEMENTS;

  ngOnInit() {
  }

}
