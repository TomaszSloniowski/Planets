import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';
import { MenuService } from '../menu/menu.service';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {


  //planets: Planet[] = [];

  planetsList = [];
  pagedList = [];
  planetsNames = [];
  breakpoint: number = 3;  //to adjust to screen
  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 5;  //displaying three cards each row
  pageSizeOptions: number[] = [5, 10, 25, 100];

 // private selectedId: number;
  public id: number;
  planets: any;

  messagePlanet: string;
  selectedPlanet: string;

  constructor(
    private service: PlanetsService,
    private data: MenuService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.planets = this.route.snapshot.data.planets.results
    console.log('Planets data: ', this.planets);
    this.service.addPlanetsIndex(this.planets);
    console.log('Indexed planets: ', this.planets);
    this.planetsNames = this.service.getPlanetsNames(this.planets);
    console.log('Planets names: ', this.planetsNames);


          /*------------- Pagination -------------------*/
          this.planetsList = this.planetsNames;
          console.log('planetsList: ', this.planetsList)
          this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
          this.pagedList = this.pagedList.slice(0, 3);
          this.length = this.planetsList.length;
        /*----------------------------------------------*/

        this.data.currentMessagePlanet.subscribe(messagePlanet => this.messagePlanet = messagePlanet);  // Data from search tab
        console.log('selected planet: ', this.messagePlanet)

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
