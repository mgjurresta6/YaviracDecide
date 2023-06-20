import { PeriodoLectivosService } from '@core/services';
import { PeriodoEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class PeriodoLectivosController {
    private periodolectivosService;
    constructor(periodolectivosService: PeriodoLectivosService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: number): Promise<ResponseHttpModel>;
    update(id: number, payload: any): Promise<ResponseHttpModel>;
    remove(id: number): Promise<ResponseHttpModel>;
    removeAll(payload: PeriodoEntity[]): Promise<ResponseHttpModel>;
}
