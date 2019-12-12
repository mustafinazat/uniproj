import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapgenComponent } from './mapgen.component';

import { EditorComponent } from './editor/editor.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'level', component: MapgenComponent, children: [      
      { path: 'editor/new', component: EditorComponent },
      { path: 'editor/:id', component: EditorComponent },
      { path: 'list', component: ListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ]
  },
  {
    path: 'level/:id', component: ViewComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapgenRoutingModule { }
