import { Profesor } from "./profesor";

export interface Cursos{
  id: string;
  nombre: string;
  comision: string;
  profesor: Profesor;
  inscripcionAbierta: boolean;
  fechaInicio: Date;
  fechaFin: Date;
}
