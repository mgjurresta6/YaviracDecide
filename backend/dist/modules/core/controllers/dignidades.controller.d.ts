import { DignidadEntity } from '@core/entities';
import { DignidadesService } from '@core/services';
import { ResponseHttpModel } from '@shared/models';
export declare class DignidadesController {
    private dignidadesService;
    constructor(dignidadesService: DignidadesService);
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: number): Promise<ResponseHttpModel>;
    update(id: number, payload: any): Promise<ResponseHttpModel>;
    remove(id: number): Promise<ResponseHttpModel>;
    removeAll(payload: DignidadEntity[]): Promise<ResponseHttpModel>;
}
