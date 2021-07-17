import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCiudadComponent } from './ciudad/listar-ciudad/listar-ciudad.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';
import { ListarHabilidadComponent } from './habilidad/listar-habilidad/listar-habilidad.component';

const routes: Routes = [
  {
    path: 'listar-departamentos',
    component: ListarDepartamentoComponent
  },
  {
    path: 'crear-departamento',
    component: CrearDepartamentoComponent,
  },
  {
    path: 'listar-ciudades',
    component: ListarCiudadComponent
  },
  {
    path: 'listar-habilidades',
    component: ListarHabilidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutingModule { }
