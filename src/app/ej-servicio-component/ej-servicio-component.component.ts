import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service'; /*1*/

@Component({
  selector: 'app-ej-servicio-component',
  templateUrl: './ej-servicio-component.component.html',
  styleUrls: ['./ej-servicio-component.component.css']
})
export class EjServicioComponentComponent implements OnInit {

  constructor(private proveedoresService: ProveedoresService) {
   } /*2*/

  mensaje: String = "";

  ngOnInit() { /*3*/
    this.mensaje = this.proveedoresService.msg();
  }

}

