import { Repository } from 'typeorm';
import { RolEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class RolesService {
    private rolRepository;
    constructor(rolRepository: Repository<RolEntity>);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: number): Promise<any>;
    update(id: number, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: number): Promise<ServiceResponseHttpModel>;
    removeAll(payload: RolEntity[]): Promise<ServiceResponseHttpModel>;
}
