import { createAction, props } from '@ngrx/store';
import { CursoState } from '../../models/curso.state';
import { Cursos } from '../../models/cursos';
import { CursosModule } from '../cursos.module';

export const cargarCursoState = createAction(
  '[CursoState] Cargar CursoStates'
);

export const cursosCargados = createAction(
  '[CursoState] Cursos cargados',
  props<{ cursos: Cursos[] }>()
);

export const eliminarCursoState = createAction(
  '[CursoState] Eliminar curso',
  props<{ curso: Cursos }>()
);

export const agregarCursoState = createAction(
  '[CursoState] Agregar curso',
  props<{ curso: Cursos }>()
);

export const editarCursoState = createAction(
  '[CursoState] Editar curso',
  props<{ curso: Cursos }>()
);





