import { TestBed } from '@angular/core/testing';
import { CursoService } from './cursos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Cursos } from '../../models/cursos';
import { of } from 'rxjs';

describe('CursosService', () => {
  let service: CursoService;
  let httpClientSpy: { get: jasmine.Spy }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers:[CursoService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    //service = TestBed.inject(CursoService);
    service = new CursoService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("el servicio retorna un arreglo de datos mockeados", (done: DoneFn)=>{
    let fechaPrueba = new Date()
    const mockDatos: Cursos[] =
      [
        {
         "nombre": "nombre 1",
         "comision": "comision 1",
         "fechaInicio": fechaPrueba,
         "fechaFin": fechaPrueba,
         "inscripcionAbierta": false,
         "profesor":
         {
          "nombre": "Oswald",
          "apellido": "Ritchie",
          "correo": "Constantin_Gibson@yahoo.com",
          "id": "1"
         },
         "id": "1"
        },
        {
         "nombre": "nombre 2",
         "comision": "comision 2",
         "fechaInicio": fechaPrueba,
         "fechaFin": fechaPrueba,
         "inscripcionAbierta": false,
         "profesor":
         {
          "nombre": "Oswald",
          "apellido": "Ritchie",
          "correo": "Constantin_Gibson@yahoo.com",
          "id": "1"
         },
         "id": "2"
        },
        {
         "nombre": "nombre 3",
         "comision": "comision 3",
         "fechaInicio": fechaPrueba,
         "fechaFin": fechaPrueba,
         "inscripcionAbierta": false,
         "profesor":
         {
          "nombre": "Oswald",
          "apellido": "Ritchie",
          "correo": "Constantin_Gibson@yahoo.com",
          "id": "1"
         },
         "id": "3"
        },

       ];

     httpClientSpy.get.and.returnValue(of(mockDatos));

     service.obtenerCursosObservable$().subscribe((cursos: Cursos[]) => {
       expect(cursos).toEqual(mockDatos);
       done();
     });
  })
});
