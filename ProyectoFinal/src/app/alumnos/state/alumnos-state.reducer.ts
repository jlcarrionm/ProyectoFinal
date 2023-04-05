import { createFeature, createReducer, on } from '@ngrx/store';
import * as AlumnosStateActions from './alumnos-state.actions';
import { AlumnosService } from '../services/alumnos.service';
import { Alumnos } from 'src/app/models/alumnos';

export const alumnosStateFeatureKey = 'alumnosState';


export interface AlumnosState {
  cargando: boolean;
  alumnos: Alumnos[];
}

export const initialState: AlumnosState = {
  cargando: false,
  alumnos: []
};



export const reducer = createReducer(
  initialState,
  on(AlumnosStateActions.cargarAlumnosStates, (state) => {
    return {...state, cargando: true};
  }),
  on(AlumnosStateActions.alumnosCargados, (state, { alumnos }) => {
    return {...state, cargando: false, alumnos};
  }),
  on(AlumnosStateActions.agregarAlumnoState, (state, { alumnos: Alumno }) => {
    return state;
  }),
  on(AlumnosStateActions.editarAlumnoState, (state, { alumnos: Alumno }) => {
    return state;
  }),
  on(AlumnosStateActions.eliminarAlumnoState, (state, { alumnos: Alumno }) => {
    return state;
  }),
);
