import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MatPaginatorModule } from '@angular/material/paginator';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { MenuComponent } from './menu/menu.component';
import { PlanetsResolver } from './PlanetsResolver';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetDetailsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    NgMatSearchBarModule,
    MatPaginatorModule
  ],
  providers: [
    PlanetsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
