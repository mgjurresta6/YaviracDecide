import { ActividadesService } from '@core/services';
import { ActividadEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class PeriodoLectivosController {
    private actividadesService;
    constructor(actividadesService: ActividadesService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: any): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: ActividadEntity[]): Promise<ResponseHttpModel>;
}
