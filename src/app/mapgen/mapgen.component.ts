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
    {
        label: 'Main',
        routerLink: ['/'],
        routerLinkActiveOptions:{exact:  true}
       
    },
    {separator:true}
    ,
      {
          label: 'Mapgen',
          routerLink: ['/mapgen'],
          routerLinkActiveOptions:{exact:  true}
         
      },
      {separator:true}
      //,

      ,{
        label: 'Mapgen1',
        routerLink: ['/mapgen/1'],
        routerLinkActiveOptions:{exact:  true}
       
    },

   {
      label: 'Mapgen2',
      routerLink: ['/mapgen/2'],
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
