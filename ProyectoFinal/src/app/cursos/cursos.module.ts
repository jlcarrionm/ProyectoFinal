import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursosRountingModule } from './cursos-rounting.module';
import { CursoService } from './services/cursos.service';
import { cursoStateFeatureKey, reducer } from './state/curso-state.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CursosEffects } from './state/curso-state.effects';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';

@NgModule({
  declarations: [
    ListaCursosComponent,
    AgregarCursosComponent,
    EditarCursoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CursosRountingModule,
    StoreModule.forFeature(cursoStateFeatureKey, reducer),
    EffectsModule.forFeature([CursosEffects])

  ],
providers: [
  CursoService
]
})
export class CursosModule { }
