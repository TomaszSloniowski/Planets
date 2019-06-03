import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
//import { Planet } from '../Planet';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

 // planets$: Observable<Planet[]>;

  private selectedId: number;

  public planets$ : any;
  public id: number;

  constructor(
    private route: ActivatedRoute,
    private service: PlanetsService,
    private router: Router,
    private data: PlanetsService
    ) { }

  ngOnInit() {

    this.planets$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          this.selectedId = +params.get('id');
        return this.service.getPlanets();
      })
    );

    /*
    this.Planets = this.route.snapshot.data.planets.results;

    let i: number;
    for (i = 0; i < 10; i++) {
      this.Planets[i].id=i+1;
    } */

}
}
