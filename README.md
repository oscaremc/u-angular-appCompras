
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


