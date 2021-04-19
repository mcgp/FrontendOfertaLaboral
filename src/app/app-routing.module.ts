import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguridadModule } from './modulos/seguridad/seguridad.module';
import { Error404Component } from './publico/errores/error404/error404.component';
import { InicioComponent } from './publico/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component:InicioComponent
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/inicio',
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(m=> m.SeguridadModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./modulos/usuario/usuario.module').then(m=> m.UsuarioModule)
  },
  {
    path: 'parametros',
    loadChildren: () => import('./modulos/parametrizacion/parametrizacion.module').then(m=> m.ParametrizacionModule)
  },
  {
    path:'**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
