import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ParametrosComponent } from './components/parametros/parametros.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ParametrosComponent,
    VehiculosComponent,
    PropiedadesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'propiedades', component:PropiedadesComponent},
      {path: 'vehiculos', component:VehiculosComponent},
      {path: 'parametros', component:ParametrosComponent},
      {path: '**', component:PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
