import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MenuService } from './menu.service';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  planetsNames = [];
  planets: any;
  planet: string;
  selectedPlanet: string;

  myControl = new FormControl();
  options: string[];
  filteredOptions: Observable<string[]>;

  constructor(
    private data: MenuService,
    private service: PlanetsService,
  ) { }

  ngOnInit() {
    this.service.getPlanetsHttp().subscribe((planets) => {
      this.planets = planets;
      this.options = this.service.getPlanetsNames(this.planets.results);
      this.options.push("Search all");
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    this.selectedPlanet = this.myControl.value
    this.data.changePlanet(this.selectedPlanet);
  }
}

