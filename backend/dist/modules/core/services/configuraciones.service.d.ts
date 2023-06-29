import { Repository } from 'typeorm';
import { ConfiguracionEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class ConfiguracionesService {
    private configuracionRepository;
    constructor(configuracionRepository: Repository<ConfiguracionEntity>);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: ConfiguracionEntity[]): Promise<ServiceResponseHttpModel>;
}
