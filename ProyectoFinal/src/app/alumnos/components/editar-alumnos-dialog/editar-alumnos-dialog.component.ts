import { Component, EventEmitter, Inject, Optional, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos } from '../../../models/alumnos';
import { editarAlumnoState } from '../../state/alumnos-state.actions';
import { AlumnosState } from '../../state/alumnos-state.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-editar-alumnos-dialog',
  templateUrl: './editar-alumnos-dialog.component.html',
  styleUrls: ['./editar-alumnos-dialog.component.css']
})
export class EditarAlumnosDialogComponent {
  formulario!: FormGroup;

  /* formulario: FormGroup; */
  /* @Output() eventoSalidaAlumno:  EventEmitter<Alumnos> = new  EventEmitter<Alumnos>; */

  constructor(
    @Optional() public dialogRef: MatDialogRef<EditarAlumnosDialogComponent>,
    @Inject( MAT_DIALOG_DATA) public alumno: Alumnos,
    private store: Store<AlumnosState>,

  ){
   /*  this.formulario = new FormGroup({
      nombre: new FormControl(data.nombre ),
      apellido: new FormControl(data.apellido),
      email: new FormControl(data.email),
      ci: new FormControl(data.ci),
      domicilio: new FormControl(data.domicilio),
      telefono: new FormControl(data.telefono),
    });
    console.log("holsa"); */
  }

  /* editarAlumno(){
   let alumno: Alumnos = {
    nombre: this.formulario.get('nombre')?.value,
    apellido: this.formulario.get('apellido')?.value,
    email: this.formulario.get('email')?.value,
    ci: this.formulario.get('ci')?.value,
    domicilio: this.formulario.get('domicilio')?.value,
    telefono: this.formulario.get('telefono')?.value,
     cursos: {
      nombre: 'SQL',
      comision: '50000',
      profesor: {
        nombre: 'Omar',
        apellido: 'Rodrigueaz',
        correo: 'orodriguez@gmail.com'
    },
    fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
    fechaFin: new Date(2023, 0, 31, 20, 30, 0),
    inscripcionAbierta: true
   }

   }
 */

   /* this.eventoSalidaAlumno.emit(alumno);
   console.log('editarAlumno',alumno);} */

   ngOnInit(): void {
    // this.profesores$ = this.profesores.obtenerProfesores();
     this.formulario = new FormGroup({
       nombre: new FormControl(this.alumno.nombre),
       apellido: new FormControl(this.alumno.apellido),
       ci: new FormControl(this.alumno.ci),
       email: new FormControl(this.alumno.email),
       domicilio: new FormControl(this.alumno.domicilio),
       telefono: new FormControl(this.alumno.telefono)
     })
   }



/*    editar(){
    //console.log('editar')
    this.dialogRef.close({mode: 'editar', ...this.data});

   } */


editar(){
  let alumno: Alumnos = {
    id: this.alumno.id,
    nombre: this.formulario.value.nombre,
    apellido: this.formulario.value.apellido,
    email: this.formulario.value.email,
    ci: this.formulario.value.ci,
    domicilio: this.formulario.value.domicilio,
    telefono: this.formulario.value.telefono

  }
  this.store.dispatch(editarAlumnoState({alumnos: alumno}));
  this.dialogRef.close(alumno);


}


   onNoClick(): void {
    this.dialogRef.close();
  }



}
