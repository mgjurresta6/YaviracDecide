import { Repository } from 'typeorm';
import { CursoEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class CursosService {
    private cursoRepository;
    private cataloguesService;
    constructor(cursoRepository: Repository<CursoEntity>, cataloguesService: CataloguesService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: number): Promise<any>;
    update(id: number, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: number): Promise<ServiceResponseHttpModel>;
    removeAll(payload: CursoEntity[]): Promise<ServiceResponseHttpModel>;
}
