import { Component } from '@angular/core';
import { Router } from '@angular/router';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-offline-support',
  templateUrl: './offline-support.component.html',
  styleUrls: ['./offline-support.component.scss']
})
export class OfflineSupportComponent {
  tiles: Tile[] = [
    {text: 'One gyuwgf ugvf i3g fyu3fgi yg3g vfy3g4 yu3g4 vy3g  yu3g4 g3ygf yu34fr', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
    {text: 'One', cols: 1, rows: 2, color: '#DDBDF1'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Four', cols: 1, rows: 2, color: 'lightgreen'},
  ];

  constructor(private route: Router){}

  back(){
    this.route.navigate(['dashboard']);
  }
}
