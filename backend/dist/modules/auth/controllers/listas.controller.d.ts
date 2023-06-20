import { ListaEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
import { ListasService } from '@core/services';
export declare class ListasController {
    private listasService;
    constructor(listasService: ListasService);
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: any): Promise<{
        data: object;
        message: string;
        title: string;
    }>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: ListaEntity[]): Promise<ResponseHttpModel>;
}
