import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {



  color = '#ff0900';
  cell1: number = 3;
 
  
  @ViewChild("tref", {read: ElementRef}) tref: ElementRef;
  @ViewChild("camera", {read: ElementRef}) camera: ElementRef;

 
  item:Observable<any>;
  position: string = "-2 2 -15";
  rotation: string = "-90 90 -90";
  numbers:Array<any>;
  number:Array<any>;
  numbersTemp:Array<any>;
  exportArr: any[][] = [] ;
  coords: Observable<any[]>;
  constructor() { }

  ngOnInit() {

    this.numbers = Array(this.count).fill(0).map((x,i)=>i);
    this.exportArr= Array(this.count).fill(0).map((x,i)=>Array(this.count).fill(0).map((x,i)=>0));


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



  count: number = 30;
  cell: number = 20;


  mouseoverBool : boolean =true;
 

  changeMass(e:number)
  {
    console.log(e);
    this.numbersTemp =  Array(e).fill(0).map((x,i)=>i);
    this.numbers = [...this.numbersTemp] 
    console.log(this.tref.nativeElement);
  }

  changecolor(e)
  {
 

    if(this.mouseoverBool){

    console.log();
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
   
    }

  }
  changeStates()
  {
    this.mouseoverBool = !this.mouseoverBool;
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
