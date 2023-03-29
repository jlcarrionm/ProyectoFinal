import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { SesionGuard } from '../core/guards/sesion.guard';


const routes: Routes = [
  { path: '',canActivateChild: [SesionGuard], children: [
    { path: 'listarcursos', component: ListaCursosComponent },

  ]}
];

@NgModule({
 imports: [RouterModule.forChild (routes)],
  exports: [RouterModule]
})
export class CursosRountingModule { }
