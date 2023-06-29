import { Repository } from 'typeorm';
import { ResultadoEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { VotosService } from './votos.service';
export declare class ResultadosService {
    private resultadoRepository;
    private votosService;
    constructor(resultadoRepository: Repository<ResultadoEntity>, votosService: VotosService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: ResultadoEntity): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: ResultadoEntity[]): Promise<ServiceResponseHttpModel>;
}
