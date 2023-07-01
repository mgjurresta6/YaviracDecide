import { CursoEntity } from './curso.entity';
import { RolEntity } from './rol.entity';
import { TipoEntity } from './usuariotipo.entity';
import { ResultadoEntity } from './resultado.entity';
import { ConfiguracionEntity } from './configuracion.entity';
export declare class UsuarioEntity {
    cedula: number;
    nombreUsuario: string;
    apellidoUsuario: string;
    emailUsuario: string;
    claveUsuario: string;
    estadoVoto: boolean;
    ultimoVoto: string;
    estadoUsuario: string;
    rol: RolEntity;
    tipo: TipoEntity;
    curso: CursoEntity;
    resultados: ResultadoEntity[];
    configuraciones: ConfiguracionEntity[];
}
