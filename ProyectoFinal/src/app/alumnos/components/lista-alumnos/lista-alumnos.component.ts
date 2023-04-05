import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

import { Alumnos } from '../../../models/alumnos';
import { AlumnosService } from '../../services/alumnos.service';
import { EditarAlumnosDialogComponent } from '../editar-alumnos-dialog/editar-alumnos-dialog.component';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { AuthState } from 'src/app/autenticacion/state/state/auth.reducer';
import { Store } from '@ngrx/store';
import { selectSesionState } from 'src/app/autenticacion/state/state/auth.selectors';
import { AlumnosState } from '../../state/alumnos-state.reducer';
import { selectAlumnosCargados, selectCargandoAlumnos } from '../../state/alumnos-state.selectors';
import { cargarCursoState } from 'src/app/cursos/state/curso-state.actions';
import { cargarAlumnosStates, eliminarAlumnoState } from '../../state/alumnos-state.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  dataSource!: MatTableDataSource<Alumnos>;

  columnas: string[] = ['nombre', 'apellido', 'email', 'ci', 'domicilio', 'telefono', 'acciones'];
  alumnoSeleccionado!: Alumnos;

  alumnos!: Alumnos[];
  suscripcion!: Subscription;
  private destroy$ = new Subject<any>();
  sesion$!: Observable<Sesion>
  cargando$!: Observable<Boolean>;
  Alumnos$!: Observable<Alumnos[]>;



  constructor(
    private alumnosService: AlumnosService,
    public dialog: MatDialog,
    private router: Router,
    private storeAuth: Store<AuthState>,
    private store: Store<AlumnosState>,
    private snackBar: MatSnackBar,


  ){

  }


  ngOnInit() {

    this.sesion$ = this.storeAuth.select(selectSesionState);
    this.cargando$ = this.store.select(selectCargandoAlumnos);

    this.store.dispatch(cargarAlumnosStates());
    this.Alumnos$ = this.store.select(selectAlumnosCargados);


    this.dataSource = new MatTableDataSource<Alumnos>();
   /*  this.suscripcion = this.alumnosService.obtenerAlumnosObservable$().subscribe((alumnos: Alumnos[]) => {
      //console.log("Agregando datos al MatTAbleDataSource");
      this.dataSource.data = alumnos;
      this.alumnos=alumnos;

    }); */
    this.Alumnos$.subscribe((alumnos: Alumnos[]) => {
     // console.log("Agregando datos al MatTAbleDataSource", alumnos);
      this.dataSource.data = alumnos;
      this.alumnos=alumnos;

    });

/*
    this.alumnos$ = this.alumnosService.obtenerAlumnosObservable$();

    this.suscripcion = this.alumnos$
      .pipe(takeUntil(this.destroy$))
      .subscribe(alumnos => this.alumnos = alumnos); */
    }


 /*  abrirModal(alumno: any){
    this.alumnoSeleccionado = this.alumnos[this.alumnos.findIndex((alumnoActual) => alumnoActual.ci === alumno.ci)];
    //console.log("Alumno", this.alumnoSeleccionado)
    const dialogRef = this.dialog.open(EditarAlumnosDialogComponent, {
      data: alumno
    });



    dialogRef.afterClosed().subscribe(result => {
      // console.log("AlumnoActulizado", result);
      // console.log("AlumnoActulizadoSeleccionado", this.alumnoSeleccionado);

     //  this.alumnos[this.alumnos.findIndex((alumnoActual) => alumnoActual.ci === this.alumnoSeleccionado.ci)] = result;
     // console.log("AlumnoActulizado", this.alumnos);
 this.alumnos = this.alumnos.map((alumnoActual: Alumnos) =>{
   if(alumnoActual.ci === result.ci){
 //console.log('Result',result.mode)

     delete result.mode;

     //console.log('Result',result.mode)

     return alumnoActual = result
   }else{
     return alumnoActual
   }
 })
 this.dataSource = new MatTableDataSource<Alumnos>(this.alumnos)
     })
   } */
   abrirModal(alumno: Alumnos){
    this.dialog.open(EditarAlumnosDialogComponent, {
      data: alumno
    }).afterClosed().subscribe((alumno: Alumnos) => {
      alert(`${alumno.nombre} editado satisfactoriamente`);
     // this.cursos$ = this.cursoService.obtenerCursosObservable$();
    });
  }

  eliminarRegistro(alumnos: Alumnos){


  //  this.alumnosService.eliminarAlumno(ci);


       /*  this.alumnosService.eliminarCurso(alumno).subscribe((alumno: Alumnos) => {
          alert(`${alumno.nombre} eliminado`);
         // this.alumnos$  = this.alumnosService.obtenerAlumnosObservable$();
         this.dataSource = new MatTableDataSource<Alumnos>();
          this.suscripcion = this.alumnosService.obtenerAlumnosObservable$().subscribe((alumnos: Alumnos[]) => {
            //console.log("Agregando datos al MatTAbleDataSource");
            this.dataSource.data = alumnos;
            this.alumnos=alumnos;

          });
        }); */

        this.snackBar.open(`${alumnos.nombre} eliminado satisfactoriamente`);
            this.store.dispatch(eliminarAlumnoState({ alumnos }));


  }

  agregarAlumno(){
    this.router.navigate(['alumnos/agregarAlumno']);
  }



}
