import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {

  constructor() { }

  texto = 'Hola soy un texto por defecto, pero si pulsas el botón cambiará mi contenido';

  modText() {
    this.texto = 'Me cambiaron de valor';
  }

  ngOnInit() {
  }

}
