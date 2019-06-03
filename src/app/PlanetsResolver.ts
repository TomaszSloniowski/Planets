import { Injectable } from '@angular/core';
import { PlanetsService } from './planets.service';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class PlanetsResolver implements Resolve<any> {
  constructor(private apiService: PlanetsService) { }


  resolve(): Observable<any> {
    return this.apiService.getPlanets();
  }
}
