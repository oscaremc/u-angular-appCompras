import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ProveedoresService {
  
  provURL = 'https://comprasapp-5b156-default-rtdb.firebaseio.com/proveedores.json';
  proURL = 'https://comprasapp-5b156-default-rtdb.firebaseio.com/proveedores';

  constructor(private http: HttpClient) { }

  postProveedor(proveedor: any){
    const newpres = JSON.stringify(proveedor);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.provURL, newpres, {headers})
      .map( res => {
        console.log(res);
        return res;
      })
  }

  getProveedores() {
    return this.http.get( this.provURL )
        .map(
          res => res
        );
  }   

  getProveedor(id$: string) {
     const url = `${this.proURL}/${id$}.json`;
     return this.http.get(url)
        .map( res => res);
  }

  putProveedor(proveedor: any, id$: string){
    const newpre = JSON.stringify(proveedor);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `${this.proURL}/${id$}.json`;

    return this.http.put( url, newpre, {headers})
        .map ( res => {
          console.log(res);
          return res;
        })

  }

  delProveedor ( id$: string) {
    const url = `${this.proURL}/${id$}.json`;
    return this.http.delete( url )
        .map ( res => res );
  }

  getProveedoresSearch(busqueda: string){
    const url = `${ this.provURL }?orderBy="nombre"&startAt="${ busqueda }"&endAt="${ busqueda }\uf8ff"`;
    return this.http.get(url)
    .map(res=> res)
  }

}
