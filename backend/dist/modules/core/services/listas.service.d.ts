import { Repository } from 'typeorm';
import { ListaEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class ListasService {
    private listaRepository;
    private cataloguesService;
    constructor(listaRepository: Repository<ListaEntity>, cataloguesService: CataloguesService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: ListaEntity[]): Promise<ServiceResponseHttpModel>;
}
