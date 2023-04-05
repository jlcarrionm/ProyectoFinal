import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as AlumnosStateActions from './alumnos-state.actions';
import { Alumnos } from 'src/app/models/alumnos';
import { agregarAlumnoState, alumnosCargados, cargarAlumnosStates, editarAlumnoState, eliminarAlumnoState } from './alumnos-state.actions';
import { cargarCursoState } from 'src/app/cursos/state/curso-state.actions';
import { AlumnosService } from '../services/alumnos.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AlumnosStateEffects {
  cargarAlumnosStates$ = createEffect(() => {
    return this.actions$.pipe( // Obserable2
        ofType(cargarAlumnosStates),
        concatMap(() => {
            return this.alumnos.obtenerAlumnosObservable$().pipe( // Obsaervable1
                map((c: Alumnos[]) => alumnosCargados({ alumnos: c }))
            )
        })
    )
});
agregarAlumnos$ = createEffect(() => {
  return this.actions$.pipe(
      ofType(agregarAlumnoState),
      concatMap(({ alumnos }) => {
          return this.alumnos.agregarAlumno(alumnos).pipe(
              map((alumno: Alumnos) => {
                  this.snackBar.open(`${alumno.nombre} agregado satisfactoriamente`);
                  this.router.navigate(['alumnos/listaralumnos']);
                  return cargarAlumnosStates();
              })
          )
      })
  );
});

editarAlumno$ = createEffect(() => {
  return this.actions$.pipe(
      ofType(editarAlumnoState),
      concatMap(({ alumnos }) => {
          return this.alumnos.editarAlumno(alumnos).pipe(
              map((alumno: Alumnos) => {
                this.snackBar.open(`${alumno.nombre} editado satisfactoriamente`);
                this.router.navigate(['alumnos/listaralumnos']);
                  return cargarAlumnosStates();
              })
          )
      })
  );
});

elimninarAlumno$ = createEffect(() => {
return this.actions$.pipe(
    ofType(eliminarAlumnoState),
    concatMap(({ alumnos }) => {
        return this.alumnos.eliminarCurso(alumnos).pipe(
            map((alumno: Alumnos) => {
                return cargarAlumnosStates();
            })
        )
    })
)
});

  constructor(

    private alumnos: AlumnosService,
    private actions$: Actions,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
}
