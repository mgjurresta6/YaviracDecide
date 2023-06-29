import { Repository } from 'typeorm';
import { VotoEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { ListasService } from '@core/services';
export declare class VotosService {
    private votoRepository;
    private listasService;
    constructor(votoRepository: Repository<VotoEntity>, listasService: ListasService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: VotoEntity): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: VotoEntity[]): Promise<ServiceResponseHttpModel>;
}
