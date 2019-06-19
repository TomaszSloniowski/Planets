import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

  planets: any;
  planetsNames = [];
  planet = [];
  planetName: string;

  constructor(
    private route: ActivatedRoute,
    private service: PlanetsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.service.getPlanetsHttp().subscribe((planets) => {
      this.planets = planets;
      this.planetName = this.route.snapshot.paramMap.get('name')
      this.planet = this.getPlanet(this.planetName, this.planets.results);
    });
  }

  getPlanet(planetName, planets) {
    for (let i = 0; i < planets.length; i++) {
      if (planets[i].name == planetName) {
        console.log('this planet: ', planets[i]);
        return planets[i];
      }
    }
  }

  goBack() {
    this.location.back();
  }
}


