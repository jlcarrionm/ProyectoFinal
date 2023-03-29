import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, throwError } from 'rxjs';
import { Cursos } from 'src/app/models/cursos';
import { env } from 'src/environment/environments';

@Injectable()
export class CursoService {
  private cursos: Cursos[]=[]
  /* private cursos: Cursos[] = [
    {
      id: '1',
      nombre: 'Angular',
      comision: '49533',
      profesor: {
        id: '1',
        nombre: 'Kleber',
        apellido:'Ruiz',
        correo: 'kruiz@aifasa.com'
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      id: '2',
      nombre: 'Vue',
      comision: '42523',
      profesor: {
        id: '2',
        nombre: 'Omar',
        apellido:'Rpdriguez',
        correo: 'orodriguez@aifasa.com'
      },
      fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
      fechaFin: new Date(2023, 1, 31, 20, 30, 0),
      inscripcionAbierta: false
    },
    {
      id: '3',
      nombre: 'NodeJS',
      comision: '42433',
      profesor: {
        id: '3',
        nombre: 'Cris',
        apellido:'Hurtado',
        correo: 'tristan@gmail.com'
    },
      fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
      fechaFin: new Date(2023, 2, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      id: '4',
      nombre: 'VS',
      comision: '505051',
      profesor: {
        id: '4',
        nombre: 'Abigail',
        apellido:'Aldas',
        correo: 'abi@gmail.com'
    },
      fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
      fechaFin: new Date(2023, 2, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
  ]; */
 /*  private cursos$!: BehaviorSubject<Cursos[]>;
 */
  constructor(
    private http: HttpClient
  ) {
  /*   this.cursos$ = new BehaviorSubject(this.cursos); */
  }
 /*  obtenerCursosPromise(): Promise<Cursos[]>{
    return new Promise((resolve, reject) => {
      if(this.cursos.length > 0){
        resolve(this.cursos);
      }else{
        reject([]);
      }
    });
   } */
   obtenerCursosObservable$(): Observable<Cursos[]>{

   /*  return this.cursos$.asObservable(); */
   return this.http.get<Cursos[]>(`${env.apiURL}/cursos`, {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'encoding': 'UTF-8'
    })
  }).pipe(
    catchError(this.capturarError)
  );

  }

  eliminarCurso(curso: Cursos): Observable<Cursos>{
    return this.http.delete<Cursos>(`${env.apiURL}/cursos/${curso.id}`, {
      headers: new HttpHeaders({
        'curso': 'Angular'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  busquedaCurso(id: string): Observable<Cursos[]>{
    console.log('variable', id)
    return this.http.get<Cursos[]>(`${env.apiURL}/cursos/${id}`, {
      headers: new HttpHeaders({
        'curso': 'Angular'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }


  /* obtenerCurso(cursoVariable: string): Promise<Cursos[]>{
    //this.cursos.push(this.http.get<Cursos[]>(`${env.apiURL}/cursos`))
    return new Promise((resolve, reject) => {
      if(this.cursos.length > 0){

        of(this.cursos).pipe(
          map((cursos: Cursos[]) => {
            return cursos.filter((curso: Cursos) => curso.comision === cursoVariable)
          })
        ).subscribe((cursos)=>{
          console.log("Obtenido desde el OF, filtrado por comision", cursos);
          resolve(cursos);
          //this.cursos$.next(cursos);
        })

      }else{
        reject([]);
      }

    });
  } */

  private capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Hubo un error del lado del cliente: ${error.message}`);
    }else{
      alert(`Hubo un error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de cursos'));
  }

}
