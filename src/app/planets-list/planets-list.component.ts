import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Planet } from '../Planet';
import { PlanetsService } from '../planets.service';
import { MenuService } from '../menu/menu.service';
// import { PageEvent } from '@angular/material/paginator';
// import { MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  planets$: Observable<Planet[]>;
  private selectedId: number;
  public id: number;

  messagePlanet: string;
  selectedPlanet: string;
/*
    // MatPaginator Inputs
    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    // MatPaginator Output
    pageEvent: PageEvent; */

  constructor(
    private route: ActivatedRoute,
    private service: PlanetsService,
    private data: MenuService
    ) { }

  ngOnInit() {
   this.planets$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          this.selectedId = +params.get('id');
        return this.service.getPlanets();
      })
    );
    this.data.currentMessagePlanet.subscribe(messagePlanet => this.messagePlanet = messagePlanet);

    /*------------- API version ----------------
    this.Planets = this.route.snapshot.data.planets.results;
*/

}
}
