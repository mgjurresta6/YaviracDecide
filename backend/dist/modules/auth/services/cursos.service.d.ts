import { Repository } from 'typeorm';
import { CursoEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class CursosService {
    private cursoRepository;
    constructor(cursoRepository: Repository<CursoEntity>);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: number): Promise<any>;
    update(id: number, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: number): Promise<ServiceResponseHttpModel>;
    removeAll(payload: CursoEntity[]): Promise<ServiceResponseHttpModel>;
}
