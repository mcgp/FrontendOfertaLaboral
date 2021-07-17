import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as crypto from 'crypto-js';
import { UsuarioModelo } from 'src/app/modelos/usuario.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  fgValidator: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { 
  }

  ConstruirFormulario(){
    this.fgValidator = this.fb.group({
      usuario: ['rochyerpl@gmail.com',[Validators.required, Validators.email]],
      clave: ['za1IJyodGf', [Validators.required, Validators.min(3)]]
    });
  }

  ngOnInit(): void {
    this.ConstruirFormulario();
  }

  get ObtenerFgValidador(){
    return this.fgValidator.controls;
  }

  ValidarIdentificacion(){
    if(this.fgValidator.invalid){
      alert("Formulario invalido")
    } else {
      let usuario = this.ObtenerFgValidador.usuario.value;
      let clave = this.ObtenerFgValidador.clave.value;
      let claveCifrada = crypto.MD5(clave).toString();
      let modelo = new UsuarioModelo();
      modelo.nombre_usuario = usuario;
      modelo.clave = claveCifrada;
      this.servicioSeguridad.VerificarUsuario(modelo).subscribe(
        (datos: UsuarioModelo) => {
          alert("Datos correctos");
          this.servicioSeguridad.AlmacenarDatosSesionEnLocal(datos);
          this.router.navigate(["/inicio"]);
        },
        (error) => {
          alert("Datos invalidos");
          console.log(error);
        }
      );
    }
  }

}
