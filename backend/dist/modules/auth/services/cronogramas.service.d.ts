import { Repository } from 'typeorm';
import { CronogramaEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class CronogramasService {
    private cronogramaRepository;
    constructor(cronogramaRepository: Repository<CronogramaEntity>);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: CronogramaEntity[]): Promise<ServiceResponseHttpModel>;
}
