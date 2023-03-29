import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos';

@Injectable()
export class AlumnosService {
  private alumnos: Alumnos[] = [
    {
      nombre: 'Jose',
      apellido: 'Carrion',
      email: 'jlcarrion90@gmail.com',
      ci: '0927509118',
      domicilio: 'Guayaquil',
      telefono: '042344710',
     /*  cursos: {
        nombre: 'Angular',
        comision: '49533',
        profesor: {
          nombre: 'Luis',
          apellido: 'Molineros',
          correo: 'Luisr@gmail.com'
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
      }, */
    },
    {
      nombre: 'Luciana',
      apellido: 'Aldas',
      email: 'lualdas@gmail.com',
      ci: '0927509999',
      domicilio: 'Ambato',
      telefono: '042344711',
      /* cursos: {
        nombre: 'Ionic',
        comision: '49999',
        profesor: {
          nombre: 'Francisco',
          apellido: 'Gallo',
          correo: 'Fgallo@gmail.com'
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
      }, */
    },
    {
      nombre: 'Sara',
      apellido: 'Ushina',
      email: 'sara@gmail.com',
      ci: '2315486987',
      domicilio: 'Guayaquil',
      telefono: '042458796',
     /*  cursos: {
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
      }, */
    }
  ]
  private alumnos$!: BehaviorSubject<Alumnos[]>;
  constructor(

  ) {

    this.alumnos$ = new BehaviorSubject(this.alumnos);
console.log('this.alumnos$',this.alumnos$)

  }

  obtenerAlumnosObservable$(): Observable<Alumnos[]>{

    return this.alumnos$.asObservable();
  }

  eliminarAlumno(ci: any){
    this.alumnos.splice( this.alumnos.findIndex((alumnoActual) => alumnoActual.ci === ci),1)
   // console.log('eliminarAlumno',this.alumnos)
    this.alumnos$.next( this.alumnos);

  }




  }



