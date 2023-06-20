import { Repository } from 'typeorm';
import { ListaEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class ListasService {
    private listaRepository;
    constructor(listaRepository: Repository<ListaEntity>);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: any): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: ListaEntity[]): Promise<ServiceResponseHttpModel>;
}
