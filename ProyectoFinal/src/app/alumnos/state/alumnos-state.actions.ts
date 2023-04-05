import { createAction, props } from '@ngrx/store';
import { Alumnos } from 'src/app/models/alumnos';

export const cargarAlumnosStates = createAction(
  '[AlumnosState] Cargar AlumnosStates'
);

export const alumnosCargados = createAction(
  '[AlumnosState] Cursos cargados',
  props<{ alumnos: Alumnos[] }>()
);

export const eliminarAlumnoState = createAction(
  '[AlumnosState] Eliminar curso',
  props<{ alumnos: Alumnos }>()
);

export const agregarAlumnoState = createAction(
  '[AlumnosState] Agregar curso',
  props<{ alumnos: Alumnos }>()
);

export const editarAlumnoState = createAction(
  '[AlumnosState] Editar curso',
  props<{ alumnos: Alumnos }>()
);





