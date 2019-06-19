import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';

const routes: Routes = [
  { path: 'planets-list', component: PlanetsListComponent },
  { path: '', redirectTo: 'planets-list', pathMatch: 'full' },
  { path: 'planet-details/:name', component: PlanetDetailsComponent },
  { path: '**', redirectTo: 'planets-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
