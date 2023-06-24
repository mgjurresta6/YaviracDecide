import { CronogramaEntity } from "./cronograma.entity";
export declare class PeriodoEntity {
    id: number;
    periodoLectivo: string;
    fechaInicioPeriodo: Date;
    fechaFinPeriodo: Date;
    cronogramas: CronogramaEntity;
}
