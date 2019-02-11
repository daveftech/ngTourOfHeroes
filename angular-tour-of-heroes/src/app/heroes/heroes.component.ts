import { Component, OnInit } from '@angular/core';
import { Hero } from '../_models/hero';
import { HEROES } from '../_models/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Wolverine'
  };
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
