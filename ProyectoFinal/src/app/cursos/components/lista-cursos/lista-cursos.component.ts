import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, takeUntil, Subject, from, map, of, filter, mergeMap, interval } from 'rxjs';

import { Cursos } from '../../../models/cursos';
import { CursoService } from '../../services/cursos.service';
import { selectCargandoCursos, selectCursosCargados } from '../../state/curso-state.selectors';
import { cargarCursoState, cursosCargados, eliminarCursoState } from '../../state/curso-state.actions';
import { CursoState } from '../../state/curso-state.reducer';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{
  cursos!: Cursos[];
  cursos$!: Observable<Cursos[]>;
  suscripcion!: Subscription;
  numberCurso!: number;
  private destroy$ = new Subject<any>();
  comision: string = '';
  profesor: string = '';
  cargando$!: Observable<Boolean>;

  private myArrayOf$!: Observable<Cursos[]>;


/*   srcObject = from(this.cursos
    ); */

  constructor(
    private cursoService: CursoService,
   // private store: Store<AppState>
   private store: Store<CursoState>,
   private snackBar: MatSnackBar
  ){

  }

  ngOnInit() {
  /*   this.cargando$ = this.store.select(selectorCargandoCursos);

    this.store.dispatch(cargarCursos());
   // this.cursos$ = this.cursoService.obtenerCursosObservable$();
   this.cursoService.obtenerCursosObservable$().subscribe((cursos: Cursos[]) => {
    this.store.dispatch(cursosCargados({ cursos: cursos }));
  });

  this.cursos$ = this.store.select(selectorCursosCargados);
 */

  this.cargando$ = this.store.select(selectCargandoCursos);

  this.store.dispatch(cargarCursoState());

/*   this.cursoService.obtenerCursosObservable$().subscribe((cursos: Cursos[]) => {
    this.store.dispatch(cursosCargados({ cursos: cursos }));
  }); */

  this.cursos$ = this.store.select(selectCursosCargados);


   /*  this.suscripcion = this.cursos$
      .pipe(takeUntil(this.destroy$))
      .subscribe(cursos => this.cursos = cursos); */

 this.cursos$.subscribe((value) => {

  this.numberCurso = value.length;
});


   /*  of(this.cursos).subscribe((cursos)=> {
      console.log('Obtenido desde el Of', cursos)
    }) */

   /*  from(this.cursos).subscribe((cursos)=> {
     // console.log('Obtenido desde el From',cursos)
    })
 */

    /* //Pipe con filter
    from(this.cursos).pipe(
      filter((curso: Cursos) => curso.comision === '505051')
    ).subscribe((curso: Cursos) => console.log('cursoFilter',curso))

   //Pipe con Map
    of(this.cursos).pipe(
      map((cursos: Cursos[]) => {
        return cursos.filter((curso: Cursos) => curso.comision === '505051')
      })
    ).subscribe((cursos)=>{
      console.log("Obtenido desde el OF, filtrado por nombre", cursos);
    }) */

   /*  of(this.cursos).pipe(
      mergeMap((cursos: Cursos[]) => {
        return interval(1000).pipe(map((i => {
          return i + cursos[i].nombre
        })));
      })
    ).subscribe((datos) => console.log('Utilizando mergeMap', datos));
 */



    }

    eliminarCurso(curso: Cursos){
    /*   this.cursoService.eliminarCurso(curso).subscribe((curso: Cursos) => {
        alert(`${curso.nombre} eliminado`);
        this.cursos$ = this.cursoService.obtenerCursosObservable$();
      }); */
      this.snackBar.open(`${curso.nombre} eliminado satisfactoriamente`);
      this.store.dispatch(eliminarCursoState({ curso }));
    }

  busqueda(){

    this.cursos$ =  this.cursoService.busquedaCurso(this.comision);

    this.cursos$.subscribe((value) => {

     // console.log('busqueda',value)
    });

   }

/*   ngOnDestroy(): void{

    this.suscripcion.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();

  } */
}
