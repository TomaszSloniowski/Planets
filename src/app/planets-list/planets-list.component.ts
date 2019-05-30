import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  public PlanetsList: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.PlanetsList = this.route.snapshot.data.planets.results;
      console.log('planety:', this.PlanetsList);
  }

}
