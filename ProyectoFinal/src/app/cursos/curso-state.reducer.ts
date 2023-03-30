import {  createReducer, on } from '@ngrx/store';
import { Cursos } from '../models/cursos';
import * as CursoStateActions from './curso-state.actions';


export const cursoStateFeatureKey = 'cursoState';

export interface CursoState {
  cargando: boolean;
  cursos: Cursos[];
}

export const initialState: CursoState = {
  cargando: false,
  cursos: []
};

export const reducer = createReducer(
  initialState,
  on(CursoStateActions.cargarCursoState, (state) => {
    return {...state, cargando: true};
  }),
  on(CursoStateActions.cursosCargados, (state, { cursos }) => {
    return {...state, cargando: false, cursos};
  })
);