import { Component, OnInit } from '@angular/core';

import { Propiedad } from './../../_interfaces/propiedad.model';
import { PropiedadRepositoryService } from './../../shared/services/propiedad-repository.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent implements OnInit {
  title = "MyCorsImplementation";
  properties: Propiedad[];
  constructor(private repository: PropiedadRepositoryService) { }

  ngOnInit(): void {
    this.getAllProperties();
  }
  private getAllProperties = () => {
    const apiAddress: string = 'api/Propietario/GetAllPropiedades';
    this.repository.getPropiedades(apiAddress)
    .subscribe(prop => {
      this.properties = prop.data;
    })
  }
}
