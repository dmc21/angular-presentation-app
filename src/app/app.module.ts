import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LateralAngularCliComponent } from './lateral-angular-cli/lateral-angular-cli.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { EjdirectivangifComponent } from './ejdirectivangif/ejdirectivangif.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { EjdirectivangstyleComponent } from './ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangswitchComponent } from './ejdirectivangswitch/ejdirectivangswitch.component';
import { MenuitemDirective } from './menuitem.directive';
import { EjmidirectivaComponent } from './ejmidirectiva/ejmidirectiva.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';

/*Servicios*/

import { ProveedoresService } from './servicios/proveedores.service';
import { EjServicioComponentComponent } from './ej-servicio-component/ej-servicio-component.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

/*Los Imports de las librerías de Angular necesarias para el funcionamiento de este módulo
así como el import del componente de este módulo.*/
/************************************************************************** */

const routes: Routes = [
  { path: '', component: ContenidoComponent },
  { path: 'sobre-mi', component: SobremiComponent},
  { path: 'interpolacionObjetos', component: ViewmodeloComponent},
  { path: 'propertyBinding', component: EjpropertybindingComponent},
  { path: 'eventBinding', component: EjeventbindingComponent},
  { path: 'twoWayBinding', component: Ej2waybindingComponent},
  { path: 'ngIf', component: EjdirectivangifComponent},
  { path: 'ngFor', component: EjdirectivangforComponent},
  { path: 'ngSwitch', component: EjdirectivangswitchComponent},
  { path: 'ngClass', component: EjdirectivangclassComponent},
  { path: 'ngStyle', component: EjdirectivangstyleComponent},
  { path: 'midirectiva', component: EjmidirectivaComponent},
  { path: 'InputYOutput', component: PadreComponent},
  { path: 'servicios', component: EjServicioComponentComponent},
  { path: 'formTemplateDriven', component: FormTemplateDrivenComponent},
  {path: 'formReactive', component: FormReactiveComponent}
];

@NgModule({ /*Decorador @NgModule que incluye:*/
  declarations: [
    AppComponent, /*Las declaraciones con el componente AppComponent que a continuación detallaremos.*/
    // tslint:disable-next-line:max-line-length
    CabeceraComponent, LateralAngularCliComponent, ContenidoComponent, ViewmodeloComponent, EjpropertybindingComponent, EjeventbindingComponent, Ej2waybindingComponent, EjdirectivangifComponent, EjdirectivangforComponent, EjdirectivangstyleComponent, EjdirectivangclassComponent, EjdirectivangswitchComponent, MenuitemDirective, EjmidirectivaComponent, SobremiComponent, PadreComponent, HijoComponent, EjServicioComponentComponent, FormTemplateDrivenComponent, FormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, /*Los imports, con los módulos a emplear, de momento el de renderización en navegadores*/
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [ProveedoresService], /*Los providers, que se declaran como un array, y de momento está vacio*/
                /* ya que no hemos creado ningún servicio.*/
  bootstrap: [AppComponent] /*Y bootstrap, recordemos exclusivo de este módulo raíz que define el*/
                            /*componente AppComponent para inicializar la aplicacion.*/
})
export class AppModule {} /*Por último, el archivo exporta la clase AppModule*/


