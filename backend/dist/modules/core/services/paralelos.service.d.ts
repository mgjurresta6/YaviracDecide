import { Repository } from 'typeorm';
import { ParaleloEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class ParalelosService {
    private paraleloRepository;
    constructor(paraleloRepository: Repository<ParaleloEntity>);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: number): Promise<any>;
    update(id: number, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: number): Promise<ServiceResponseHttpModel>;
    removeAll(payload: ParaleloEntity[]): Promise<ServiceResponseHttpModel>;
}
