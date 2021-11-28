import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.css']
})
export class EjdirectivangforComponent implements OnInit {

  arrayDatos: String[];

  constructor() {
    this.arrayDatos = ['David', 'Antonio', 'Almería'];
  }



  ngOnInit() {
  }

}
