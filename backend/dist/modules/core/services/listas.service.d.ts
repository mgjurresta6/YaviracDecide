import { Repository } from 'typeorm';
import { ListaEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { DignidadesService, TipoListasService } from '@core/services';
export declare class ListasService {
    private listaRepository;
    private tipolistasService;
    private dignidadesService;
    constructor(listaRepository: Repository<ListaEntity>, tipolistasService: TipoListasService, dignidadesService: DignidadesService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: ListaEntity): Promise<ServiceResponseHttpModel>;
    findAll(params?: any): Promise<ServiceResponseHttpModel>;
    findOne(id: number): Promise<any>;
    update(id: number, payload: any): Promise<ServiceResponseHttpModel>;
    remove(id: number): Promise<ServiceResponseHttpModel>;
    removeAll(payload: ListaEntity[]): Promise<ServiceResponseHttpModel>;
}
