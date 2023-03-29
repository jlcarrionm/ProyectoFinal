import { Pipe, PipeTransform } from '@angular/core';
import { Alumnos } from '../../models/alumnos';

@Pipe({
  name: 'concatenarNombreApellido'
})
export class ConcatenarNombreApellidoPipe implements PipeTransform {

  transform(alumno: Alumnos): string {
    return alumno.nombre  + " " + alumno.apellido ;
  }

}
