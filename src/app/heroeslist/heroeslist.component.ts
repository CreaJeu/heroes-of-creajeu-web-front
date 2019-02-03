import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroeslist',
  templateUrl: './heroeslist.component.html',
  styleUrls: ['./heroeslist.component.css']
})
export class HeroeslistComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[];
  selectedHero: Hero;
  
  private refreshView(_heroes: Hero[]) {
    this.heroes = _heroes;
    if(this.heroes.length > 0) {
      this.selectedHero = this.heroes[0];
    }
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(
      _heroes => this.refreshView(_heroes));
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
