import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos';
import { env } from 'src/environment/environments';

@Injectable()
export class AlumnosService {
  private  alumnos: Alumnos[]=[]

  private alumnos$!: BehaviorSubject<Alumnos[]>;
  constructor(
    private http: HttpClient
  ) {

    this.alumnos$ = new BehaviorSubject(this.alumnos);
//console.log('this.alumnos$',this.alumnos$)

  }

/*   obtenerAlumnosObservable$(): Observable<Alumnos[]>{

    return this.alumnos$.asObservable();
  } */

  eliminarAlumno(ci: any){
    this.alumnos.splice( this.alumnos.findIndex((alumnoActual) => alumnoActual.ci === ci),1)
   // console.log('eliminarAlumno',this.alumnos)
    this.alumnos$.next( this.alumnos);

  }

  agregarAlumno(alumno: Alumnos): Observable<Alumnos>{
    return this.http.post<Alumnos>(`${env.apiURL}/alumnos`, alumno, {
      headers: new HttpHeaders({
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }


  editarAlumno(alumno: Alumnos): Observable<Alumnos>{
   // console.log('servicio',alumno)
    return this.http.put<Alumnos>(`${env.apiURL}/alumnos/${alumno.id}`, alumno, {
      headers: new HttpHeaders({
        'usuario': 'Abner'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  obtenerAlumnosObservable$(): Observable<Alumnos[]>{


    return this.http.get<Alumnos[]>(`${env.apiURL}/alumnos`, {
     headers: new HttpHeaders({
       'content-type': 'application/json',
       'encoding': 'UTF-8'
     })
   }).pipe(
     catchError(this.capturarError)
   );

   }


  eliminarCurso(alumno: Alumnos): Observable<Alumnos>{
    return this.http.delete<Alumnos>(`${env.apiURL}/alumnos/${alumno.id}`, {
      headers: new HttpHeaders({
        'curso': 'Angular'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }


  private capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Hubo un error del lado del cliente: ${error.message}`);
    }else{
      alert(`Hubo un error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de Alumnos'));
  }




  }



