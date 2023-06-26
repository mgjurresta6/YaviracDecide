import { Repository } from 'typeorm';
import { CarreraEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class CarrerasService {
    private carreraRepository;
    constructor(carreraRepository: Repository<CarreraEntity>);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: number): Promise<any>;
    update(id: number, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: number): Promise<ServiceResponseHttpModel>;
    removeAll(payload: CarreraEntity[]): Promise<ServiceResponseHttpModel>;
}
