import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'ho-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']  
})
export class HeroListComponent implements OnInit {
  constructor(private heroService: HeroService) {
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}