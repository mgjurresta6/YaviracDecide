import { Repository } from 'typeorm';
import { PeriodoEntity } from '@core/entities';
export declare class PeriodosService {
    private periodolectivoRepository;
    constructor(periodolectivoRepository: Repository<PeriodoEntity>);
}
