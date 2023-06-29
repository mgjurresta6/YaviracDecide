import { CarrerasService } from '@core/services';
import { CarreraEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class CarrerasController {
    private carrerasService;
    constructor(carrerasService: CarrerasService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: number): Promise<ResponseHttpModel>;
    update(id: number, payload: any): Promise<ResponseHttpModel>;
    remove(id: number): Promise<ResponseHttpModel>;
    removeAll(payload: CarreraEntity[]): Promise<ResponseHttpModel>;
}
