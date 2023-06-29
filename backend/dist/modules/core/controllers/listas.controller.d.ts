import { ListaEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
import { ListasService } from '@core/services';
export declare class ListasController {
    private listasService;
    constructor(listasService: ListasService);
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: number): Promise<ResponseHttpModel>;
    update(id: number, payload: any): Promise<{
        data: object;
        message: string;
        title: string;
    }>;
    remove(id: number): Promise<ResponseHttpModel>;
    removeAll(payload: ListaEntity[]): Promise<ResponseHttpModel>;
}
