import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../facturas.service';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas: any[] = [];

  cargando = true;

  constructor(private facturasService: FacturasService) {
    this.facturasService.getFacturas()
        .subscribe((facturas: any) => {
           for ( const id$ in facturas) {
             const p = facturas[id$];
             p.id$ = id$;
             this.facturas.push(facturas[id$]);
          }
        this.cargando = false;
        })
  }

  ngOnInit() {

  }

  eliminarFactura(id$:any) {

    this.facturasService.delFactura(id$)
      .subscribe( res => {
        this.facturas = [];
        this.facturasService.getFacturas()
        .subscribe((facturas: any) => {
           for ( const id$ in facturas) {
             const p = facturas[id$];
             p.id$ = id$;
             this.facturas.push(facturas[id$]);
          }
        })
      });
  }
}

