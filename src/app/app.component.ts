import { Component } from '@angular/core'; /*Se importa la librería component de Angular*/

@Component({ /*decorador component con un objeto de metadatos, que en este caso contiene:*/
  selector: 'app-celia',    /*define en que etiqueta html se renderizará el componente. en este caso <app-celia>*/
  templateUrl: './app.component.html', /*define el contenido html del componente*/
  styleUrls: ['./app.component.css']/*aqui se definen los estilos css particulares de ese componente.*/
})

export class AppComponent { /*Exportación de la clase AppComponent que contiene la lógica del componente.*/
  presentacion: String = 'Hola Mundo';
}
