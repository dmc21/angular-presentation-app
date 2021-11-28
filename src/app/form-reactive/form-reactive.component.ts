import { Component, OnInit } from '@angular/core';
/*Importación de las clases FormControl, FormGroup y FormBuilder*/
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  clienteForm: FormGroup = this.cf.group({});
  cliente: any = {nombre: "", apellidos: "", email: "", ciudad: ""};

  constructor(private cf: FormBuilder) { }

  ngOnInit() {
  /*Cuando el componente se carga, todos los campos del formulario se vacían.*/
    this.clienteForm = this.cf.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ciudad: ['Huelva', Validators.required]
    });
  }

  envio() {
    this.cliente = {
      nombre: this.clienteForm.get('nombre')?.value,
      apellidos: this.clienteForm.get('apellidos')?.value,
      email: this.clienteForm.get('email')?.value,
      ciudad: this.clienteForm.get('ciudad')?.value
    };
  }
}
