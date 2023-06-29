import { CarreraEntity } from './carrera.entity';
import { UsuarioEntity } from './usuario.entity';
import { JornadaEntity } from './jornada.entity';
export declare class CursoEntity {
    id: number;
    acronimoCarrera: string;
    carrera: CarreraEntity;
    jornada: JornadaEntity;
    paralelo: CarreraEntity;
    cursos: UsuarioEntity[];
}
