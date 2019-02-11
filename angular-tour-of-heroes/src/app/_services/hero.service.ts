import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../_models/hero';
import { HEROES } from '../_models/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
