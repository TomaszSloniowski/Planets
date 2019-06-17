import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { PlanetsComponent} from './planets/planets.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { PlanetsResolver } from './PlanetsResolver';

const routes: Routes = [
 /* { path: 'planets', component: PlanetsComponent, resolve: {
    planets: PlanetsResolver,
  }}, */
  { path: 'planets-list', component: PlanetsListComponent, resolve: {
    planets: PlanetsResolver  },
  },
  { path: '', redirectTo: 'planets-list', pathMatch: 'full' },
  { path: 'planet-details/:id', component: PlanetDetailsComponent },
  { path: '**', redirectTo: 'planets-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
