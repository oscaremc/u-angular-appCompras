import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presURL = 'https://comprasapp-5b156-default-rtdb.firebaseio.com/presupuestos.json';
  
  constructor(private http: HttpClient) { }
  
  postPresupuesto(presupuesto: any){
    const newpres = JSON.stringify(presupuesto);
    const headers: any = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.presURL, newpres, {headers})
    .map( (res: any) => {
      console.log(res.json());
      return res.json();
      })
  }
  
}
