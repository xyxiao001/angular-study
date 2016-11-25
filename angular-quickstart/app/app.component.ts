import { Component } from '@angular/core'

import { Hero } from './hero'

const HEROES: Hero[] = [
  {
    id: 1,
    name: '小明'
  },
  {
    id: 2,
    name: '小红'
  },
  {
    id: 3,
    name: '小刚'
  },
  {
    id: 4,
    name: '小杰'
  },
  {
    id: 5,
    name: '小迪'
  }
]

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
    `
})

export class AppComponent {
  title = 'Tour of Heroes'
  heroes = HEROES
  selectedHero: Hero

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
