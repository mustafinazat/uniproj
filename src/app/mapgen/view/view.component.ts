import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  count: number = 5;

  position: string = "-2 2 4";
  rotation: string = "0 90 0";
  numbers:Array<any>;
  exportArr: any[][] = [] ;
  constructor() { 
 

  }
  
  ngOnInit() {
    this.numbers = Array(5).fill(0).map((x,i)=>i);
    if(localStorage.getItem('massiv')){
      this.exportArr = JSON.parse(localStorage.getItem('massiv'));
    }
    else
    {
      this.exportArr= Array(this.count).fill(0).map((x,i)=>Array(this.count).fill(0).map((x,i)=>0));
    }
  
   
  }



}
