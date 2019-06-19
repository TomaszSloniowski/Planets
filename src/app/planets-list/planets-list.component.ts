import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';
import { MenuService } from '../menu/menu.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  planetsList = [];
  pagedList = [];
  planetsNames = [];
  planets: any;
  messagePlanet: string;

  breakpoint: number = 3;
  length: number = 0;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(
    private service: PlanetsService,
    private data: MenuService,
  ) { }

  ngOnInit() {
    this.service.getPlanetsHttp().subscribe((planets) => {
      this.planets = planets;
      this.planetsNames = this.service.getPlanetsNames(this.planets.results);

      /*------------- Pagination -------------------*/
          this.planetsList = this.planetsNames;
          this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
          this.pagedList = this.pagedList.slice(0, 3);
          this.length = this.planetsList.length;
          this.pagedList = this.planetsList.slice(1, 10);

        /*----------------------------------------------*/
    });

    this.data.currentMessagePlanet.subscribe(messagePlanet => this.messagePlanet = messagePlanet);  // Data from search tab
  }

  /*------------- Pagination -------------------*/

  OnPageChange(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.length) {
      endIndex = this.length;
    }
    this.pagedList = this.planetsList.slice(startIndex, endIndex);
  }

  onResize(event) { //to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
  /*--------------------------------------------*/

}
