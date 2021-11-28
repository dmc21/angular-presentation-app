import { Injectable } from '@angular/core'; /*1*/

@Injectable({ /*2*/
  providedIn: 'root'
})
export class ProveedoresService {  /*3*/

  constructor() { }

  msg() { /*4*/
    return 'Soy un mensaje enviado desde el servicio';
  }
}

