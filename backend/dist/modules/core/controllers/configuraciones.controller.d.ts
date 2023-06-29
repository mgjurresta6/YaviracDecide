import { ConfiguracionEntity } from '@core/entities';
import { ConfiguracionesService } from '@core/services';
import { ResponseHttpModel } from '@shared/models';
export declare class ConfiguracionesController {
    private configuracionesService;
    constructor(configuracionesService: ConfiguracionesService);
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: any): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: ConfiguracionEntity[]): Promise<ResponseHttpModel>;
}
