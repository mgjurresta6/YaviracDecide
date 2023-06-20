import { Repository } from 'typeorm';
import { VotoEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class VotosService {
    private votoRepository;
    constructor(votoRepository: Repository<VotoEntity>);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: VotoEntity[]): Promise<ServiceResponseHttpModel>;
}
