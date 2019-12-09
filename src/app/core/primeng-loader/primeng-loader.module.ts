import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabViewModule,
    AccordionModule,
    TableModule,
    MenuModule,
    MenubarModule
    

  ],
  exports: [
    TabViewModule,
    AccordionModule,
    TableModule,
    MenuModule,
    MenubarModule
  ]
})
export class PrimengLoaderModule { }
