import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() {
  }

  avisos: String[] = ['Aviso 1', 'Aviso 2', 'Aviso 3'];

  texto: String = "";

  mostrarMensaje(aviso: string) {
    this.texto = aviso + ' marcado como leído';
  }

  ngOnInit() {

  }

}
