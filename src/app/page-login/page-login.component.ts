import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropiedadRepositoryService } from '../shared/services/propiedad-repository.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PropiedadForCreation } from 'src/app/_interfaces/propiedadForCreation.model';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  title = "MyCorsImplementation";
  errorMessage: string = '';
  loginForm: FormGroup;
  // bsModalRef?: BsModalRef;
  constructor(private repository: PropiedadRepositoryService,
    private router: Router) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      correo: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required])
    });
  }

  validateControl = (controlName: string) => {
    if (this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched)
      return true;
    
    return false;
  } 
  
  hasError = (controlName: string, errorName: string) => {
    if (this.loginForm.get(controlName).hasError(errorName))
      return true;
    
    return false;
  }

  createLogin = (loginFormValue) => {
    if (this.loginForm.valid)
      this.executeOwnerCreation(loginFormValue);
  }

  private executeOwnerCreation = (loginFormValue) => {

    const apiUrl = 'api/Login/ValidarUsuario/'+loginFormValue.correo+'/'+loginFormValue.contrasena;
    this.repository.createLogin(apiUrl)
    .subscribe({
      next: prop => {
          if(prop.data === true){
            this.redirectToHome();
          }else{
            alert(prop.returnMessage);
          }
      },
      error: (err: HttpErrorResponse) => {
          alert(err);
      }
    })
  }
  redirectToHome = () => {
    this.router.navigate(['/home']);
  }
}