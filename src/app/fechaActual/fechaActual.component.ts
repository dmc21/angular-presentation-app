import { Component } from '@angular/core';

@Component ({
    selector: 'app-fechaActual',
    template: `
        
        <p> {{ciudad | uppercase}}, {{ hoy | date:'d/M/y' | uppercase}} a las {{ hoy | date:'H:m Z'}} </p>
        <p>El resultado es {{ resultado | number:'2.2-2'}}</p>
        <p>La cotización actual del dólar es de {{dolareuro | euro}}</p>
        <p>{{sexo | i18nSelect: encabezamiento }} {{ nombre }}</p>
        <app-copyright></app-copyright>
    `
})

export class FechaActualComponent {
    hoy: any = new Date();
    ciudad: string = "Sevilla";
    resultado:number = 1.148;
    dolareuro:number = 0.94;
    nombre:string = "Laura";
    sexo:string = "Mujer";
    encabezamiento: any = {'Hombre':'Estimado','Mujer':'Estimada'};
}