import { ActividadEntity } from './actividad.entity';
import { PeriodoEntity } from './periodolectivo.entity';
export declare class CronogramaEntity {
    id: string;
    fechaCreacion: Date;
    responsable: string;
    actividad: ActividadEntity;
    periodo: PeriodoEntity;
}
