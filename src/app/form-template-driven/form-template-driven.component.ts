import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; /* 1.- Importamos el módulo NgForm en el componente*/

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {

  cliente: any[] = []; /* 2.- Creamos un array vacío*/

  constructor() {}

  ngOnInit() {
  }


  envio(datosCliente: NgForm) { /* 3.- Método que recibe un objeto NgForm*/

    this.cliente.push({
      nombre: datosCliente.value.nombre,
      email: datosCliente.value.email
    });

    datosCliente.resetForm();

  }
}
