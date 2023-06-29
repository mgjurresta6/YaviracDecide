import { DignidadEntity } from './dignidad.entity';
import { TipoListaEntity } from './tipolista.entity';
import { VotoEntity } from './voto.entity';
export declare class ListaEntity {
    id: number;
    nombreLista: string;
    logo: string;
    slogan: string;
    color: string;
    numeroLista: string;
    propuesta: string;
    tipoLista: TipoListaEntity;
    listas: VotoEntity[];
    dignidad: DignidadEntity;
}
