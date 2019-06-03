import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PLANETS } from './Planets-mock';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlanetsService {

constructor(private http: HttpClient) { }

getPlanets() { return of(PLANETS); }

/*
getPlanetsHttp() {
return this.http.get('https://swapi.co/api/planets/')
} */

  getPlanet(id) {
     return this.getPlanets().pipe(
      map(planets => planets.find(planet => planet.id === +id)));
   }

}
