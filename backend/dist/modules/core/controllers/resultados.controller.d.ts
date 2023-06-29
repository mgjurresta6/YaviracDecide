import { ResultadosService } from '@core/services';
import { ResultadoEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class ResultadosController {
    private resultadosService;
    constructor(resultadosService: ResultadosService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: any): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: ResultadoEntity[]): Promise<ResponseHttpModel>;
}
