import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {

  }

  @Input() aviso:string;

  leido:boolean = false;
  mensaje: string;

  marcar(event){
    this.leido = !this.leido;
  }

  @Output() mensajeMarcado = new EventEmitter();

  detectar(event){
    this.mensaje = this.aviso;
    this.mensajeMarcado.emit(this.mensaje);
  }

}
