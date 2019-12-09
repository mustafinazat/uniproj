import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapgenComponent } from './mapgen.component';
import { MapgenRoutingModule } from './mapgen-routing.module';
import { CoreModule } from '../core/core.module';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [MapgenComponent, Comp1Component, Comp2Component],
  imports: [
    CommonModule,
    CoreModule,
    MapgenRoutingModule
  ]
})
export class MapgenModule { }
