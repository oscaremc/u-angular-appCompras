import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveComponent } from './proveedores/addprove/addprove.component'
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosService } from "./servicios/presupuestos.service";
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'proveedores', component: ProveedoresComponent},
  { path: 'addprovee', component: AddproveComponent},
  { path: 'addpres', component: AddpresComponent},
  { path: 'presupuestos', component: PresupuestosComponent},
  { path: '**', component: InicioComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveComponent,
    AddpresComponent,
    PresupuestosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProveedoresService, PresupuestosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
