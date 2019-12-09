import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-mapgen',
  templateUrl: './mapgen.component.html',
  styleUrls: ['./mapgen.component.scss']
})
export class MapgenComponent implements OnInit {

  constructor() { }

  private items: MenuItem[]; //https://www.primefaces.org/primeng/#/menumodel

  ngOnInit() {
    this.items = [

      {separator:true}
      //,

      ,{
        label: 'Все',
        routerLink: ['/mapgen/list'],
        routerLinkActiveOptions:{exact:  true}
       
    },

   {
      label: 'Создать новый',
      routerLink: ['/mapgen/editor/new'],
      routerLinkActiveOptions:{exact:  true}
     
  },
      // {label: 'Open', icon: 'fa fa-download', routerLink: ['/pagename']}
      // {
      //     label: 'Edit',
      //     icon: 'pi pi-fw pi-pencil',
      //     items: [
      //         {label: 'Delete', icon: 'pi pi-fw pi-trash'},
      //         {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      //     ]
      // }
  ];

}

}
