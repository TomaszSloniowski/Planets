import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PLANETS } from '../Planets-mock'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  Planets: any;
  PlanetsNames: any;

  myControl = new FormControl();
  options: string[] = this.getPlanetsNames()
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.getPlanetsNames();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getPlanetsNames() {
    this.Planets = PLANETS;
    this.PlanetsNames = [];
    let i: number;
    for (i = 0; i < 10; i++) {
      this.PlanetsNames.push(this.Planets[i].name);
    }
    return this.PlanetsNames;
  }

}

