import { Repository } from 'typeorm';
import { ResultadoEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class ResultadosService {
    private resultadoRepository;
    constructor(resultadoRepository: Repository<ResultadoEntity>);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: ResultadoEntity[]): Promise<ServiceResponseHttpModel>;
}
