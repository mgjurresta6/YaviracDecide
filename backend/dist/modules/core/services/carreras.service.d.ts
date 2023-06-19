import { Repository } from 'typeorm';
import { CarreraEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class CarrerasService {
    private carreraRepository;
    private cataloguesService;
    constructor(carreraRepository: Repository<CarreraEntity>, cataloguesService: CataloguesService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: CarreraEntity[]): Promise<ServiceResponseHttpModel>;
}
