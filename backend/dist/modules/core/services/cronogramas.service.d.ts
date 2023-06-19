import { Repository } from 'typeorm';
import { CronogramaEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class CronogramasService {
    private cronogramaRepository;
    private cataloguesService;
    constructor(cronogramaRepository: Repository<CronogramaEntity>, cataloguesService: CataloguesService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: CronogramaEntity[]): Promise<ServiceResponseHttpModel>;
}
