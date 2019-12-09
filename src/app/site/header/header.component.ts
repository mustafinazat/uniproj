import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
        label: 'MapgenInfo',
        routerLink: ['/mapgen/info'],
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
