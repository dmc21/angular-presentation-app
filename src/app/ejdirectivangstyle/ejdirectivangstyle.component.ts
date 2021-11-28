import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangstyle',
  templateUrl: './ejdirectivangstyle.component.html',
  styleUrls: ['./ejdirectivangstyle.component.css']
})
export class EjdirectivangstyleComponent implements OnInit {

  constructor() { }

  puntuacion: number = 0;

  setColor() {
    let devuelve: String = '';

      if (this.puntuacion >= 5) {
        devuelve = 'green';
      } else { devuelve = 'red'; }

      return devuelve;

  }

  ngOnInit() {
  }

}
