import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { PlanetsResolver } from './PlanetsResolver';

const routes: Routes = [
  { path: 'planets-list', component: PlanetsListComponent, resolve: {
    planets: PlanetsResolver,
  }},
  { path: 'planet-details/:id', component: PlanetDetailsComponent,  },
  { path: '', redirectTo: 'planets-list', pathMatch: 'full' },
  { path: '**', redirectTo: 'planets-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
