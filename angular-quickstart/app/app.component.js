"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
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
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
        this.hero = {
            id: 1,
            name: 'windstorm'
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{ title }}</h1>\n    <h2>{{ hero.name }} details!</h2>\n    <div><label>name: </label><input type=\"text\" [(ngModel)]=\"hero.name\" placeholder=\"name\"></div>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\">\n        <span class=\"badge\">{{ hero.id }}</span> {{ hero.name }}\n      </li>\n    </ul>\n    "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map