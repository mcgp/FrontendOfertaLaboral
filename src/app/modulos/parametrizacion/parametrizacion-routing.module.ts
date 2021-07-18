import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCiudadComponent } from './ciudad/listar-ciudad/listar-ciudad.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';
import { CrearHabilidadComponent } from './habilidad/crear-habilidad/crear-habilidad.component';
import { EditarHabilidadComponent } from './habilidad/editar-habilidad/editar-habilidad.component';
import { EliminarHabilidadComponent } from './habilidad/eliminar-habilidad/eliminar-habilidad.component';
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
    path: 'editar-departamento/:id',
    component: EditarDepartamentoComponent,
  },
  {
    path: 'eliminar-departamento/:id',
    component: EliminarDepartamentoComponent,
  },
  {
    path: 'listar-ciudades',
    component: ListarCiudadComponent
  },
  {
    path: 'listar-habilidades',
    component: ListarHabilidadComponent
  },
  {
    path: 'crear-habilidades',
    component: CrearHabilidadComponent
  },
  {
    path: 'editar-habilidades',
    component: EditarHabilidadComponent
  },
  {
    path: 'eliminar-habilidades',
    component: EliminarHabilidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutingModule { }
