import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PLANETS } from './Planets-mock';
import { Planet } from './Planet';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets() { return of(PLANETS); }

  getPlanetsHttp() {
    return this.http.get<Planet[]>('https://swapi.co/api/planets/')
  }

  getPlanet(id) {
    return this.getPlanets().pipe(
      map(planets => planets.find(planet => planet.id === +id)));
  }

  addPlanetsIndex(planets: any) {
    let i: number;
    for (i = 0; i < 10; i++) {
      planets.results[i].id=i+1
    }
    return planets.results;
  }

}
