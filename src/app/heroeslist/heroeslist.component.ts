import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES_DATA } from '../mock-heroes'

@Component({
  selector: 'app-heroeslist',
  templateUrl: './heroeslist.component.html',
  styleUrls: ['./heroeslist.component.css']
})
export class HeroeslistComponent implements OnInit {

  constructor() { }

  heroes: Hero[] = HEROES_DATA;
  selectedHero: Hero;

  ngOnInit() {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
