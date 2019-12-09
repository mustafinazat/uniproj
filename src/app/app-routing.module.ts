import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapgenComponent } from './mapgen/mapgen.component';
import {IndexComponent} from './index/index.component'
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'mapgen', component: MapgenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
