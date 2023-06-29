import { TipoListasService } from '@core/services';
import { TipoListaEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class TipoListasController {
    private tipolistasService;
    constructor(tipolistasService: TipoListasService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: number): Promise<ResponseHttpModel>;
    update(id: number, payload: any): Promise<ResponseHttpModel>;
    remove(id: number): Promise<ResponseHttpModel>;
    removeAll(payload: TipoListaEntity[]): Promise<ResponseHttpModel>;
}
