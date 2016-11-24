import { Component } from '@angular/core'

export class Hero {
  id: number
  name: string
}

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
    <h2>{{ hero.name }} details!</h2>
    <div><label>name: </label><input type="text" [(ngModel)]="hero.name" placeholder="name"></div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>
    `
})

export class AppComponent {
  title = 'Tour of Heroes'
  heroes = HEROES
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  }
}
