import { Repository } from 'typeorm';
import { JornadaEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class JornadasService {
    private jornadasRepository;
    constructor(jornadasRepository: Repository<JornadaEntity>);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: number): Promise<any>;
    update(id: number, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: number): Promise<ServiceResponseHttpModel>;
    removeAll(payload: JornadaEntity[]): Promise<ServiceResponseHttpModel>;
}
