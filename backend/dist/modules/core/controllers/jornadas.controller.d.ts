import { ResponseHttpModel } from '@shared/models';
import { JornadasService } from '@core/services';
import { JornadaEntity } from '@core/entities';
export declare class JornadasController {
    private jornadasService;
    constructor(jornadasService: JornadasService);
    create(payload: any): Promise<ResponseHttpModel>;
    catalogue(): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: number): Promise<ResponseHttpModel>;
    update(id: number, payload: any): Promise<ResponseHttpModel>;
    remove(id: number): Promise<ResponseHttpModel>;
    removeAll(payload: JornadaEntity[]): Promise<{
        data: import("@shared/models").ServiceResponseHttpModel;
        message: string;
        title: string;
    }>;
}
