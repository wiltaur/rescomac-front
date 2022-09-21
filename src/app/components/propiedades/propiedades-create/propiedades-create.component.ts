import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropiedadRepositoryService } from '../../../shared/services/propiedad-repository.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PropiedadForCreation } from 'src/app/_interfaces/propiedadForCreation.model';

@Component({
  selector: 'app-propiedades-create',
  templateUrl: './propiedades-create.component.html',
  styleUrls: ['./propiedades-create.component.css']
})
export class PropiedadesCreateComponent implements OnInit {
  title = "MyCorsImplementation";
  errorMessage: string = '';
  propiedadForm: FormGroup;
  // bsModalRef?: BsModalRef;
  constructor(private repository: PropiedadRepositoryService,
    private router: Router) { }
  ngOnInit(): void {
    this.propiedadForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      torre: new FormControl('', [Validators.required]),
      apto: new FormControl('', [Validators.required]),
      dia: new FormControl('')
    });
  }

  validateControl = (controlName: string) => {
    if (this.propiedadForm.get(controlName).invalid && this.propiedadForm.get(controlName).touched)
      return true;
    
    return false;
  } 
  
  hasError = (controlName: string, errorName: string) => {
    if (this.propiedadForm.get(controlName).hasError(errorName))
      return true;
    
    return false;
  }

  createPropiedad = (propiedadFormValue) => {
    if (this.propiedadForm.valid)
      this.executeOwnerCreation(propiedadFormValue);
  }

  private executeOwnerCreation = (propiedadFormValue) => {
    const propiedad: PropiedadForCreation = {
      nombre: propiedadFormValue.nombre,
      apellido: propiedadFormValue.apellido,
      identificacion: propiedadFormValue.identificacion,
      celular: propiedadFormValue.celular,
      correo: propiedadFormValue.correo,
      apto: propiedadFormValue.apto,
      torre: propiedadFormValue.torre,
      estadoPago: propiedadFormValue.dia.checked ? true : false
      // dateOfBirth: this.datePipe.transform(propiedadFormValue.dateOfBirth, 'yyyy-MM-dd'),
    }
    const apiUrl = 'api/propietario/AddPropiedad';
    this.repository.createPropiedad(apiUrl, propiedad)
    .subscribe({
      next: prop => {
          if(prop.data === true){
            this.redirectToPropiedadList();
          }
      },
      error: (err: HttpErrorResponse) => {
          alert(err);
      }
    })
  }
  redirectToPropiedadList = () => {
    this.router.navigate(['/propiedades']);
  }
}