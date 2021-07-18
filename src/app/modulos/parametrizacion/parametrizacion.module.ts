import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrizacionRoutingModule } from './parametrizacion-routing.module';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';
import { ListarCiudadComponent } from './ciudad/listar-ciudad/listar-ciudad.component';
import { ListarHabilidadComponent } from './habilidad/listar-habilidad/listar-habilidad.component';
import { CrearHabilidadComponent } from './habilidad/crear-habilidad/crear-habilidad.component';
import { EditarHabilidadComponent } from './habilidad/editar-habilidad/editar-habilidad.component';
import { EliminarHabilidadComponent } from './habilidad/eliminar-habilidad/eliminar-habilidad.component';
import { ListarProfesionComponent } from './profesion/listar-profesion/listar-profesion.component';
import { CrearProfesionComponent } from './profesion/crear-profesion/crear-profesion.component';
import { EditarProfesionComponent } from './profesion/editar-profesion/editar-profesion.component';
import { EliminarProfesionComponent } from './profesion/eliminar-profesion/eliminar-profesion.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';


@NgModule({
  declarations: [
    ListarDepartamentoComponent,
    ListarCiudadComponent,
    ListarHabilidadComponent,
    CrearHabilidadComponent,
    EditarHabilidadComponent,
    EliminarHabilidadComponent,
    ListarProfesionComponent,
    CrearProfesionComponent,
    EditarProfesionComponent,
    EliminarProfesionComponent,
    CrearDepartamentoComponent,
    EditarDepartamentoComponent,
    EliminarDepartamentoComponent,
  ],
  imports: [
    CommonModule,
    ParametrizacionRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class ParametrizacionModule { }
