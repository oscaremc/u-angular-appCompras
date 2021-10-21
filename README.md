
Creacion de servicio 

comando para crear servicio proveedores dentro de el componente en la linea de comando:

ng generate service servicios/proveedores  

creamos el mentodo getProveedores que retorne un mensaje:

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor() { }

  getProveedores() {
    return 'Mensaje desde el servicio';
  }
}


se crea componente proveedores dentro de la carpeta proveedores

ng g c proveedores/proveedores 

en el archivo proveedores.component.ts

creamos la variable y el constructor para recibir la informacion del servicio proveedores

import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from "../../servicios/proveedores.service";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

mensaje!: string;

constructor(private proveedoresService: ProveedoresService) { }

ngOnInit(): void {
this.mensaje = this.proveedoresService.getProveedores();
}

}


en el archivo proveedores.component.html usamos la variable para impirimir la informacion que traemos del servicio: 

<h1> {{ mensaje }} </h1>

si efectivamente corremos nuestro servidor y nuestra mensaje aparece en pantalla 'Mensaje desde el servicio' quiere decir que la conexion quedo bien echa entonces podemos agrear unos datos objetos al servidor para que pueda verse mucho mejor. 

en el archivo proveedores.service.ts editamos el codigo de la siguiente manera: 

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  proveedores: any[] = [                        //Agregamos el un array de objetos
    {
      nombre: 'Telefonica', 
      cif: 'B12345678', 
      direccion: 'Paseo de la Castellana 100',
      cp: '28.010',
      localidad: 'Madrid',
      providencia: 'Madrid',
      telefono: 9111111111, 
      email: 'info@telefono.com',
      contacto: 'Juan Perez'
    },
    {
      nombre: 'Iberdola', 
      cif: 'B87654321', 
      direccion: 'Principe de Vergara, 200',
      cp: '28.015',
      localidad: 'Madrid',
      providencia: 'Madrid',
      telefono: 912222222, 
      email: 'info@iberdrola.com',
      contacto: 'Laura Martinez'
    }
  ]

  constructor() { }

  getProveedores() {
    return this.proveedores;        //envamos el arra en el metodo para poderlo usar
  }
}


luego vamos al componente proveedores y en el archivo proveedores.component.ts editamos el  codigo de la siguiente forma: 

import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from "../../servicios/proveedores.service";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: any;                     //creamos la varible que guardara la info que nos envia proveedores

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedores();        //llamamos la info del servicio y la guardamos en la propiedad proveedores
  }

}

usamos la siguiente plantilla para impirmir la infomacion que queremos ver en pantalla modificando el archivo proveedores.component.html

<h3>Listado de Proveedores</h3>

<table class="table table-bordered table-striped" style="margin-top: 40px;">
    <thead>
        <tr class="filters"> 
            <th>Nombre</th>
            <th>Correo electronico</th>
            <th>Telefono</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let proveedor of proveedores">
            <td> {{ proveedor.nombre }} </td>
            <td><a href="mailto: {{ proveedor.email }}"> {{ proveedor.email }} </a></td>
            <td> {{ proveedor.telefono }} </td>
        </tr>
    </tbody>
</table>


FLUJO DE RUTAS

creamos un nuevo componente llamado inicio con la siguiente linea de comando en nuestra terminal: 

ng g c inicio 

luego de cargar modificias el archivo inicio.component.html para darle una visual al componente y saber que estoy hay: 

<h3>Bienvenidos a mi Aplicacion Compras App</h3>

en el archivo app.modules.ts debemos importar la propiedad que nos permitira usar el concepto de rutas dentro del proyecto; 

import { Routes, RouterModule } from '@angular/router';

luego se debe agregar a la seccion de imports asi: 

imports: [
BrowserModule,
AppRoutingModule,
RouterModule.forRoot(routes)        //forRoot es metodo que me permite recorresr todas las rutas que tenga la varible (routes)
],

Creamos la variable routes: 

const routes: Routes = [
  { path: '', component: InicioComponent},                  // ruta raiz o principal cuando se cargue el proyecto
  { path: 'proveedores', component: ProveedoresComponent},  // ruta que sigue llamada proveedores
];

el archivo app.modules.ts debe quedar entonces mas: 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component'

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'proveedores', component: ProveedoresComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }


claro esta para que funcione las ruta lo que debemos hacer ahora es agregar la ruta principal al componente raiz que es app.component.html: 

<div class="container">
  <router-outlet></router-outlet>       //se ecargara de leer la varible routes en su orden
</div>

con esto completado debemos cargar el proyecto y ver los siguiente: 

localhost:4200             vemos  el mensaje de bienvenida del componente inicio
localhost:4200/proveedores vemos  la tabla de la lista proveedores. 




