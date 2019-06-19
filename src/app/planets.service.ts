import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PlanetsService {

  planets: any;
  planetsNames = [];

  constructor(private http: HttpClient) { }

  getPlanetsHttp() {
    return this.http.get('https://swapi.co/api/planets/')
  }

  getPlanetsNames(planets) {
    this.planetsNames = [];
    let i: number;
    for (i = 0; i < 10; i++) {
      this.planetsNames.push(planets[i].name);
    }
    return this.planetsNames;
  }
}
