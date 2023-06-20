import { Repository } from 'typeorm';
import { ActividadEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class ActividadesService {
    private actividadRepository;
    constructor(actividadRepository: Repository<ActividadEntity>);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: ActividadEntity[]): Promise<ServiceResponseHttpModel>;
}
