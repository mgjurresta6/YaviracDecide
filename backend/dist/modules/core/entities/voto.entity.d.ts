import { ListaEntity } from './lista.entity';
import { ResultadoEntity } from './resultado.entity';
export declare class VotoEntity {
    id: string;
    votoUsuario: boolean;
    horaVoto: Date;
    votos: ResultadoEntity[];
    lista: ListaEntity;
}
