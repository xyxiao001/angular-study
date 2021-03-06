import { Component } from '@angular/core'

import { Hero } from './hero'
import { HeroService } from './hero-service'

@Component({
  selector: 'my-app',
  template:`
    <h1>{{ title }}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes'
  selectedHero: Hero

  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
