import { Repository } from 'typeorm';
import { PeriodoEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class PeriodoLectivosService {
    private periodolectivoRepository;
    private cataloguesService;
    constructor(periodolectivoRepository: Repository<PeriodoEntity>, cataloguesService: CataloguesService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: number): Promise<any>;
    update(id: number, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: number): Promise<ServiceResponseHttpModel>;
    removeAll(payload: PeriodoEntity[]): Promise<ServiceResponseHttpModel>;
}
