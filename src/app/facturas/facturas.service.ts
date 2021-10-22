import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class FacturasService {

  frasURL = 'https://comprasapp-5b156-default-rtdb.firebaseio.com/facturas.json';
  fraURL = 'https://comprasapp-5b156-default-rtdb.firebaseio.com/facturas';


  constructor(private http: HttpClient) { }

  postFactura( factura: any) {
    const newfra = JSON.stringify(factura);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.frasURL, newfra, {headers})
      .map( res => {
        console.log(res);
        return res;
        })
  }

  getFacturas() {

    return this.http.get( this.frasURL )
      .map( res => res);
    }

  getFactura ( id$: string ) {
    const url = `${ this.fraURL }/${ id$ }.json`;
    return this.http.get( url )
      .map( res => res);
    }

  putFactura( factura: any, id$: string) {
    const newfra = JSON.stringify(factura);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `${ this.fraURL }/${ id$ }.json`;

    return this.http.put( url, newfra, {headers})
      .map( res => {
        console.log(res);
        return res;
        })
  }

  delFactura ( id$: string ) {
    const url = `${ this.fraURL }/${ id$ }.json`;
    return this.http.delete( url )
      .map( res => res);
  }

}

