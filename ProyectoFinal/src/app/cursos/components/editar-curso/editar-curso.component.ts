import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Profesor } from 'src/app/models/profesor';
import { CursoService } from '../../services/cursos.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Cursos } from 'src/app/models/cursos';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent  implements OnInit{
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>;

  constructor(
    private cursoService: CursoService,
    private router: Router,
   // private profesores: ProfesorService,
    private dialogRef: MatDialogRef<EditarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Cursos
  ){}

  ngOnInit(): void {
   // this.profesores$ = this.profesores.obtenerProfesores();
    this.formulario = new FormGroup({
      comision: new FormControl(this.curso.comision),
      fechaFin: new FormControl(this.curso.fechaFin),
      fechaInicio: new FormControl(this.curso.fechaInicio),
      inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta),
      nombre: new FormControl(this.curso.nombre),
      profesor: new FormControl(this.curso.profesor)
    })
  }

  editarCurso(){
    let curso: Cursos = {
      id: this.curso.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: this.formulario.value.profesor
    };

    this.cursoService.editarCurso(curso).subscribe((curso: Cursos) => {
      this.dialogRef.close(curso);
    });
  }
}
