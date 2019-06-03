import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Planet } from '../Planet';
import { PlanetsService } from '../planets.service';


@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

  planet$: Observable<Planet>;

  public planet: any;
  public id: string;

  constructor(
    private route: ActivatedRoute,
    private service: PlanetsService
  ) { }

  ngOnInit() {

    this.planet$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getPlanet(params.get('id')))
        );
  }
}


