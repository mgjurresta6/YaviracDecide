import { ActividadesService } from '@core/services';
import { ActividadEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class ActividadesController {
    private actividadesService;
    constructor(actividadesService: ActividadesService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: number): Promise<ResponseHttpModel>;
    update(id: number, payload: any): Promise<ResponseHttpModel>;
    remove(id: number): Promise<ResponseHttpModel>;
    removeAll(payload: ActividadEntity[]): Promise<ResponseHttpModel>;
}
