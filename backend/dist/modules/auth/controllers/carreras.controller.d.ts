import { CarrerasService } from '@core/services';
import { CarreraEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class CarrerasController {
    private carrerasService;
    constructor(carrerasService: CarrerasService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: any): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: CarreraEntity[]): Promise<ResponseHttpModel>;
}
