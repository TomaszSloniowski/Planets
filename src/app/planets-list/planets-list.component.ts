import { Component, OnInit } from '@angular/core';
import { Planet } from '../Planet';
import { PlanetsService } from '../planets.service';
import { MenuService } from '../menu/menu.service';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {


  planets: Planet[] = [];
  planetsList: Planet[] = [];
  pagedList: Planet[] = [];
  breakpoint: number = 3;  //to adjust to screen
  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 5;  //displaying three cards each row
  pageSizeOptions: number[] = [5, 10, 25, 100];

 // private selectedId: number;
  public id: number;

  messagePlanet: string;
  selectedPlanet: string;

  constructor(
    private service: PlanetsService,
    private data: MenuService,
  ) { }

  ngOnInit() {
    this.service.getPlanetsHttp().subscribe((planets) => {
      this.planets = planets;
      this.planets = this.service.addPlanetsIndex (this.planets)

          /*------------- Pagination -------------------*/
          this.planetsList = this.planets;
          this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
          this.pagedList = this.pagedList.slice(0, 3);
          this.length = this.planetsList.length;
        /*----------------------------------------------*/

        this.data.currentMessagePlanet.subscribe(messagePlanet => this.messagePlanet = messagePlanet);  // Data from search tab
    });
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


  /*------------- Resolver version ----------------
    this.Planets = this.route.snapshot.data.planets.results;
  */

}
