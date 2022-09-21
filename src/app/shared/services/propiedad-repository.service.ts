import { Propiedad } from './../../_interfaces/propiedad.model';
import { PropiedadForCreation } from './../../_interfaces/propiedadForCreation.model';
import { GralResponse } from './../../_interfaces/gralResponse.model';
import { EnvironmentUrlService } from './environment-url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropiedadRepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }
  public getPropiedades = (route: string) => {
    return this.http.get<GralResponse>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }
  public createPropiedad = (route: string, propiedad: PropiedadForCreation) => {
    return this.http.post<GralResponse>(this.createCompleteRoute(route, this.envUrl.urlAddress), propiedad, this.generateHeaders());
  }
  public updatePropiedad = (route: string, propiedad: Propiedad) => {
    return this.http.put<GralResponse>(this.createCompleteRoute(route, this.envUrl.urlAddress), propiedad, this.generateHeaders());
  }
  public deletePropiedad = (route: string) => {
    return this.http.delete<GralResponse>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }
}
