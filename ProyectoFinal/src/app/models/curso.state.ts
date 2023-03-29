import { Cursos } from 'src/app/models/cursos';


export interface CursoState{
    cargando: boolean;
    cursos: Cursos[];
}
