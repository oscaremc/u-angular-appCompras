import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  proveedores: any[] = [
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
    return this.proveedores;
  }
}
