import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapgenComponent } from './mapgen.component';
import { MapgenRoutingModule } from './mapgen-routing.module';
import { CoreModule } from '../core/core.module';
import { EditorComponent } from './editor/editor.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [MapgenComponent, EditorComponent, ListComponent, ViewComponent],
  imports: [
    CommonModule,
    CoreModule,
    MapgenRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapgenModule { }
