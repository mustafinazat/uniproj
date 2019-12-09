import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapgenComponent } from './mapgen.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';


const routes: Routes = [
  {
    path: 'mapgen', component: MapgenComponent, children: [      
      { path: 'info', component: MapgenComponent },
      { path: '1', component: Comp1Component },
      { path: '2', component: Comp2Component },
      { path: '', redirectTo: 'info', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapgenRoutingModule { }
