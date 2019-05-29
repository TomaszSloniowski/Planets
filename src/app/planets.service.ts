import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }


  getPlanets() {
    return this.http.get('https://swapi.co/api/planets/')
  }
}
