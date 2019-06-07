import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private messagePlanet = new BehaviorSubject('??') ;
  currentMessagePlanet = this.messagePlanet.asObservable();

  constructor() { }

  changePlanet(selectedPlanet: string) {
  this.messagePlanet.next(selectedPlanet);
}
}
