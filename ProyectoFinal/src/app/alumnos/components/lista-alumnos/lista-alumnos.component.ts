import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

import { Alumnos } from '../../../models/alumnos';
import { AlumnosService } from '../../services/alumnos.service';
import { EditarAlumnosDialogComponent } from '../editar-alumnos-dialog/editar-alumnos-dialog.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy {

  dataSource!: MatTableDataSource<Alumnos>;

  columnas: string[] = ['nombre', 'apellido', 'email', 'ci', 'domicilio', 'telefono', 'acciones'];
  alumnoSeleccionado!: Alumnos;
  alumnos$!: Observable<Alumnos[]>;
  alumnos!: Alumnos[];
  suscripcion!: Subscription;
  private destroy$ = new Subject<any>();

  constructor(
    private alumnosService: AlumnosService,
    public dialog: MatDialog

  ){

  }


  ngOnInit() {

    this.dataSource = new MatTableDataSource<Alumnos>();
    this.suscripcion = this.alumnosService.obtenerAlumnosObservable$().subscribe((alumnos: Alumnos[]) => {
      console.log("Agregando datos al MatTAbleDataSource");
      this.dataSource.data = alumnos;
      this.alumnos=alumnos;

    });

/*
    this.alumnos$ = this.alumnosService.obtenerAlumnosObservable$();

    this.suscripcion = this.alumnos$
      .pipe(takeUntil(this.destroy$))
      .subscribe(alumnos => this.alumnos = alumnos); */
    }


  abrirModal(alumno: any){
    this.alumnoSeleccionado = this.alumnos[this.alumnos.findIndex((alumnoActual) => alumnoActual.ci === alumno.ci)];
    console.log("Alumno", this.alumnoSeleccionado)
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
 console.log('Result',result.mode)

     delete result.mode;

     console.log('Result',result.mode)

     return alumnoActual = result
   }else{
     return alumnoActual
   }
 })
 this.dataSource = new MatTableDataSource<Alumnos>(this.alumnos)
     })
   }

  eliminarRegistro(ci: any){

    console.log("cedula", ci)
 /*   this.alumnos.splice( this.alumnos.findIndex((alumnoActual) => alumnoActual.ci === ci),1)

    console.log("Delete", this.alumnos)

    this.dataSource = new MatTableDataSource<Alumnos>(this.alumnos)
 */
    this.alumnosService.eliminarAlumno(ci);

  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();

  }

}
