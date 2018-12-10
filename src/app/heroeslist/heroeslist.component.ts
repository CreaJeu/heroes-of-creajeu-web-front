import { Component, OnInit } from '@angular/core';
import { HEROES_DATA } from '../mock-heroes'
import { Hero } from '../hero';

@Component({
  selector: 'app-heroeslist',
  templateUrl: './heroeslist.component.html',
  styleUrls: ['./heroeslist.component.css']
})
export class HeroeslistComponent implements OnInit {

  constructor() { }

  heroes = HEROES_DATA;
  selectedHero : Hero;

  ngOnInit() {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
