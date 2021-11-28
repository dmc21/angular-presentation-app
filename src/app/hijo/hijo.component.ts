import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'; /*1*/

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }

  @Input() aviso: String = ""; /*2*/

  @Output() mensajeMarcado = new EventEmitter(); /*3*/

  leido: Boolean = false;

  marcar() { /*4*/
    this.leido = !this.leido;
  }

  detectar() { /*5*/
    this.mensajeMarcado.emit(this.aviso);
  }

  ngOnInit() {
  }
}


