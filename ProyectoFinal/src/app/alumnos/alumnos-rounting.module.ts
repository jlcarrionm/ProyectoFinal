import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { SesionGuard } from '../core/guards/sesion.guard';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';


const routes: Routes = [
  { path: '', canActivateChild: [SesionGuard],children: [
    { path: 'listaralumnos', component: ListaAlumnosComponent },
    { path: 'agregarAlumno', component: AgregarAlumnoComponent },

  ]}
];

@NgModule({
 imports: [RouterModule.forChild (routes)],
  exports: [RouterModule]
})
export class AlumnosRountingModule { }
