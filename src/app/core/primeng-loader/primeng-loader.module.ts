import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {ColorPickerModule} from 'primeng/colorpicker';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabViewModule,
    AccordionModule,
    TableModule,
    MenuModule,
    MenubarModule,
    ColorPickerModule,
    SelectButtonModule,
    ToggleButtonModule
  ],
  exports: [
    TabViewModule,
    AccordionModule,
    TableModule,
    MenuModule,
    MenubarModule,
    ColorPickerModule,
    SelectButtonModule,
    ToggleButtonModule
  ]
})
export class PrimengLoaderModule { }
