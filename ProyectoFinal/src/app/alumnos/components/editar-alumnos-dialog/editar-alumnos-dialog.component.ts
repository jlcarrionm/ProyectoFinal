import { Component, EventEmitter, Inject, Optional, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos } from '../../../models/alumnos';

@Component({
  selector: 'app-editar-alumnos-dialog',
  templateUrl: './editar-alumnos-dialog.component.html',
  styleUrls: ['./editar-alumnos-dialog.component.css']
})
export class EditarAlumnosDialogComponent {
  /* formulario: FormGroup; */
  /* @Output() eventoSalidaAlumno:  EventEmitter<Alumnos> = new  EventEmitter<Alumnos>; */

  constructor(
    @Optional() public dialogRef: MatDialogRef<EditarAlumnosDialogComponent>,
    @Inject( MAT_DIALOG_DATA) public data: Alumnos

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

   editar(){
    console.log('editar')
    this.dialogRef.close({mode: 'editar', ...this.data});
   }

   onNoClick(): void {
    this.dialogRef.close();
  }
}
