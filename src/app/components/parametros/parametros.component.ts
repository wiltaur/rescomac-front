import { Component, OnInit } from '@angular/core';
import { Propiedad } from './../../_interfaces/propiedad.model';
import { PropiedadRepositoryService } from './../../shared/services/propiedad-repository.service';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  title = "MyCorsImplementation";
  properties: Propiedad[];
  constructor(private repository: PropiedadRepositoryService) { }

  ngOnInit(): void {
    this.getAllProperties();
  }
  private getAllProperties = () => {
    const apiAddress: string = 'api/Propietario/GetAllPropiedades';
    // this.repository.getPropiedades(apiAddress)
    // .subscribe(prop => {
    //   this.properties = prop.data;
    // })
  }

}
