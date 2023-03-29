import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursosRountingModule } from './cursos-rounting.module';
import { CursoService } from './services/cursos.service';




@NgModule({
  declarations: [
    ListaCursosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CursosRountingModule
  ],
providers: [
  CursoService
]
})
export class CursosModule { }
