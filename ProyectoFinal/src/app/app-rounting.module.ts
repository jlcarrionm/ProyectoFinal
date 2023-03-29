import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaAlumnosComponent } from './alumnos/components/lista-alumnos/lista-alumnos.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
import { SesionGuard } from './core/guards/sesion.guard';


import { ListaCursosComponent } from './cursos/components/lista-cursos/lista-cursos.component';

// localhost:4200/login -> login.component
// localhost:4200/inicio -> inicio.component
const routes: Routes = [
 /*  {path: 'inicio', component: ListaAlumnosComponent}, */
  {path: 'inicio', component: InicioComponent, canActivate: [SesionGuard]},
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((modulo) => modulo.CursosModule),
    canLoad: [SesionGuard]

  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then((modulo) => modulo.AlumnosModule),
    canLoad: [SesionGuard]

  },
  {
    path: 'auth',
    loadChildren: () => import('./autenticacion/autenticacion.module').then((modulo) => modulo.AutenticacionModule)

  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
   {path: '**', component: NoEncontradoComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRountingModule { }
