import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/models/profesor';
import { CursoService } from '../../services/cursos.service';
import { Cursos } from 'src/app/models/cursos';

@Component({
  selector: 'app-agregar-cursos',
  templateUrl: './agregar-cursos.component.html',
  styleUrls: ['./agregar-cursos.component.css']
})
export class AgregarCursosComponent implements OnInit{
  formulario!: FormGroup;
  //profesores$!: Observable<Profesor[]>;

  constructor(
    private router: Router,
    private cursoService: CursoService,
   // private profesores: ProfesorService
  ){}

  ngOnInit(): void {
   // this.profesores$ = this.profesores.obtenerProfesores();
    this.formulario = new FormGroup({
      comision: new FormControl(''),
      fechaFin: new FormControl(''),
      fechaInicio: new FormControl(''),
      inscripcionAbierta: new FormControl(false),
      nombre: new FormControl(''),
      profesor: new FormControl({})
    })
  }

  agregarCurso(){
    let curso: Cursos = {
      id: '',
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: this.formulario.value.profesor
    }
    this.cursoService.agregarCurso(curso).subscribe((curso: Cursos) => {
      alert(`${curso.nombre} agregado satisfactoriamente`);
      this.router.navigate(['cursos/listarcursos']);
    });
  }


}
