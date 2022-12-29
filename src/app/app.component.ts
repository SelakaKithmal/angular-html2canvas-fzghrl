import { Component, ElementRef, ViewChild } from '@angular/core';
//import * as html2canvas from 'html2canvas';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  someArray = [];
  downloadImage(){

    this.someArray.push(['b','f']);
    
    console.log(JSON.stringify(this.someArray))
  }
}
