import { Repository } from 'typeorm';
import { CronogramaEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { ActividadesService, PeriodosService } from '@core/services';
export declare class CronogramasService {
    private cronogramaRepository;
    private actividadesService;
    private periodosService;
    constructor(cronogramaRepository: Repository<CronogramaEntity>, actividadesService: ActividadesService, periodosService: PeriodosService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: CronogramaEntity): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: CronogramaEntity[]): Promise<ServiceResponseHttpModel>;
}
