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

  planets: any;
  planetsNames = [];

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
      planets[i].id=i+1
    }
    return planets.results;
  }

  getPlanetsNames(planets: any) {
    this.planetsNames = [];
    let i: number;
    for (i = 0; i < 10; i++) {
    this.planetsNames.push(planets[i].name);
    }
    this.planetsNames.push("Search all");
    return this.planetsNames;

  }
/*
  getPlanetsNames(planets: any) {
    this.getPlanetsHttp().subscribe((planets) => {
    this.planets = planets;

    let i: number;
    for (i = 0; i < 10; i++) {
      this.planetsNames[i] = planets.results[i].name;
    }
    return this.planetsNames
  }*/

}
