import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import { Observable } from 'rxjs';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {



  color = '#ff0900';
  cell1: number = 3;
 
  
  @ViewChild("tref", {read: ElementRef,static: false}) tref: ElementRef;
  @ViewChild("camera", {read: ElementRef,static: false}) camera: ElementRef;

 
  item:Observable<any>;
  edit_mode: boolean = false;
  position: string = "-2 2 4";
  rotation: string = "0 90 0";
  numbers:Array<any>;
  number:Array<any>;
  numbersTemp:Array<any>;
  exportArr: any[][] = [] ;
  coords: Observable<any[]>;

  types: SelectItem[];
  selectedType: string ='wall';

  constructor() { 
    this.numbers = Array(this.count).fill(0).map((x,i)=>i);
    this.exportArr= Array(this.count).fill(0).map((x,i)=>Array(this.count).fill(0).map((x,i)=>0));
  }

  ngOnInit() {

    this.types = [
      {label: 'Стена', value: 'wall'},
      {label: 'Двигающаяся платформа', value: 'mov_platform'},
      {label: 'Двигающися куб', value: 'mov_box'}
  ];




    this.camera.nativeElement.addEventListener('componentchanged',  (evt) => {

      if (evt.detail.name == 'position') { 
        let y;
      if (evt.detail.newData.y < 1)
       { y = 2}
       else
       {
y = evt.detail.newData.y;
       }
      this.position = evt.detail.newData.x +' ' +y +' '+ evt.detail.newData.z;
  
       }

       if (evt.detail.name == 'rotation') { 
        let y;
      
y = evt.detail.newData.y;
       
      this.rotation = evt.detail.newData.x +' ' +y +' '+ evt.detail.newData.z;
   
       }

       if (this.color == 'green'){
       // this.socket.emit("position", [this.position,this.rotation]);
      }

});
  }



  count: number = 5;
  cell: number = 20;


  mouseoverBool : boolean =true;
 

  changeMass(e:number)
  {


    console.log(e);
    this.numbersTemp =  Array(e).fill(0).map((x,i)=>i);
    this.numbers = [...this.numbersTemp] 

    this.exportArr= Array(this.count).fill(0).map((x,i)=>Array(this.count).fill(0).map((x,i)=>0));
  
    console.log(this.tref.nativeElement);
    console.log(this.tref.nativeElement);
    console.log(this.numbers);

  }

  changecolor(e)
  {


 

    if(this.edit_mode){


      switch(this.selectedType) { 
        case "wall": { 
          if(e.target.style.border == "2px solid black")
          {
            e.target.firstChild.value = '';
            e.target.style.backgroundColor = '#fff';
            e.target.style.border = "1px solid #ddd"
          }
          else
          {
            e.target.style.backgroundColor = this.color;
            e.target.firstChild.value = this.cell1;
            e.target.style.border = "2px solid black"
          }
          
           break; 
        } 


        case "mov_platform": { 
          if(e.target.style.border == "2px solid blue")
          {
            e.target.firstChild.value = '';
            e.target.style.backgroundColor = '#fff';
            e.target.style.border = "1px solid #ddd"
          }
          else
          {
            e.target.style.backgroundColor = this.color;
            e.target.firstChild.value = this.cell1;
            e.target.style.border = "2px solid blue"
          }
          
           break; 
        }
       
        default: { 
          
           break; 
        } 
      }

   
  
   
    }

  }
 



  exportTable()
  {
    console.log("aza");
    this.exportArr = [] ;
   // var table = document.getElementById("mytab1");
    var table = (<HTMLTableElement>document.getElementById("mytab1"));
    for (var i = 0, row; row = table.rows[i]; i++) {
       //iterate through rows
       //rows would be accessed using the "row" variable assigned in the for loop
       this.exportArr=[...this.exportArr,[]];
       for (var j = 0, col; col = row.cells[j]; j++) {
         //iterate through columns
         //columns would be accessed using the "col" variable assigned in the for loop


         switch(row.cells[j].style.border) { 
          case "2px solid black": { 
            this.exportArr[i][j]=
            {
              type: 1,
              color: row.cells[j].style.backgroundColor,
              height: row.cells[j].firstChild.value,
            };
             break; 
          } 
          case "2px solid blue": { 
            this.exportArr[i][j]=
            {
              type: 2,
              color: row.cells[j].style.backgroundColor,
              height: row.cells[j].firstChild.value,
            };
             break; 
          } 
         
          default: { 
            this.exportArr[i][j]=0;
             break; 
          } 
       } 
       
       
         
       }  
    }

    console.log( this.exportArr);
    console.log( JSON.stringify(this.exportArr));
  }

}
