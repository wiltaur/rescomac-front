import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ParametrosComponent } from './components/parametros/parametros.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { HttpClientModule } from '@angular/common/http';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropiedadesCreateComponent } from './components/propiedades/propiedades-create/propiedades-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ParametrosComponent,
    VehiculosComponent,
    PropiedadesComponent,
    PageNotFoundComponent,
    PropiedadesCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'propiedades', component:PropiedadesComponent},
      {path: 'vehiculos', component:VehiculosComponent},
      {path: 'parametros', component:ParametrosComponent},
      {path: 'propiedades/create', component: PropiedadesCreateComponent},
      {path: '**', component:PageNotFoundComponent}
    ]),
    HttpClientModule,
    // BsDatepickerModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
