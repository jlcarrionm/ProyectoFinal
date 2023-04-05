import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../services/alumnos.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Alumnos } from 'src/app/models/alumnos';
import { agregarAlumnoState } from '../../state/alumnos-state.actions';
import { AlumnosState } from '../../state/alumnos-state.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent  implements OnInit {
  formulario!: FormGroup;
  constructor(
    private alumnosService: AlumnosService,

    private router: Router,
    private store: Store<AlumnosState>,

  ){

  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
    //  usuario: new FormControl(),
     nombre: new FormControl(''),
     apellido: new FormControl(''),
     email: new FormControl(''),
      ci: new FormControl(''),
      domicilio: new FormControl(''),
      telefono: new FormControl('')

    });


}

agregarAlumno(){
  let alumno: Alumnos = {
    id: '',
    nombre: this.formulario.value.nombre,
    apellido: this.formulario.value.apellido,
    email: this.formulario.value.email,
    ci: this.formulario.value.ci,
    domicilio: this.formulario.value.domicilio,
    telefono: this.formulario.value.telefono

  }
/*   this.alumnosService.agregarAlumno(alumno).subscribe((alumno: Alumnos) => {
    alert(`${alumno.nombre} agregado satisfactoriamente`);
    this.router.navigate(['alumnos/listaralumnos']);
  }); */


  this.store.dispatch(agregarAlumnoState({ alumnos: alumno }));

}
}
