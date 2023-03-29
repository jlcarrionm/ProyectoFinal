import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { SesionGuard } from '../core/guards/sesion.guard';


const routes: Routes = [
  { path: '', canActivateChild: [SesionGuard],children: [
    { path: 'listaralumnos', component: ListaAlumnosComponent },

  ]}
];

@NgModule({
 imports: [RouterModule.forChild (routes)],
  exports: [RouterModule]
})
export class AlumnosRountingModule { }
