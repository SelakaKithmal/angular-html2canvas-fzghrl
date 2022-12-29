import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private someArray: any[][];

  constructor() {
    this.someArray = [];
    this.printArray()
  }

  printArray() {
    for (var i: number = 0; i < 10; i++) {
      this.someArray[i] = [];
      for (var j: number = 0; j < 2; j++) {
        if (j == 1) {
          this.someArray[i][j] = 'XXX';
        } else {
          this.someArray[i][j] = 'ZZZ';
        }
      }
    }
    console.log(JSON.stringify(this.someArray));
  }
}
