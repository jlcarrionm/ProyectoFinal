import { createAction, props } from '@ngrx/store';
import { CursoState } from '../models/curso.state';
import { Cursos } from '../models/cursos';
import { CursosModule } from './cursos.module';

export const cargarCursoState = createAction(
  '[CursoState] Cargar CursoStates'
);

export const cursosCargados = createAction(
  '[CursoState] Cursos cargados',
  props<{ cursos: Cursos[] }>()
);






