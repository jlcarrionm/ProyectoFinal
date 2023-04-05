import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Cursos } from "src/app/models/cursos";
import { CursoService } from "../services/cursos.service";
import { agregarCursoState, cargarCursoState, cursosCargados, editarCursoState, eliminarCursoState } from "./curso-state.actions";


@Injectable()
export class CursosEffects{
    cargarCursos$ = createEffect(() => {
        return this.actions$.pipe( // Obserable2
            ofType(cargarCursoState),
            concatMap(() => {
                return this.cursos.obtenerCursosObservable$().pipe( // Obsaervable1
                    map((c: Cursos[]) => cursosCargados({ cursos: c }))
                )
            })
        )
    });

  agregarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(agregarCursoState),
            concatMap(({ curso }) => {
                return this.cursos.agregarCurso(curso).pipe(
                    map((curso: Cursos) => {
                        this.snackBar.open(`${curso.nombre} agregado satisfactoriamente`);
                        this.router.navigate(['cursos/listarcursos']);
                        return cargarCursoState();
                    })
                )
            })
        );
    });


    editarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(editarCursoState),
            concatMap(({ curso }) => {
                return this.cursos.editarCurso(curso).pipe(
                    map((curso: Cursos) => {
                      this.snackBar.open(`${curso.nombre} editado satisfactoriamente`);
                      this.router.navigate(['cursos/listarcursos']);
                        return cargarCursoState();
                    })
                )
            })
        );
    });

    elimninarCurso$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(eliminarCursoState),
          concatMap(({ curso }) => {
              return this.cursos.eliminarCurso(curso).pipe(
                  map((curso: Cursos) => {
                      return cargarCursoState();
                  })
              )
          })
      )
  });
    constructor(
        private cursos: CursoService,
        private actions$: Actions,
        private router: Router,
        private snackBar: MatSnackBar
    ){}
}
