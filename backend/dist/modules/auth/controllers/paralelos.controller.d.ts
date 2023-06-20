import { ParalelosService } from '@core/services';
import { ParaleloEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class ParalelosController {
    private paralelosService;
    constructor(paralelosService: ParalelosService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: number): Promise<ResponseHttpModel>;
    update(id: number, payload: any): Promise<ResponseHttpModel>;
    remove(id: number): Promise<ResponseHttpModel>;
    removeAll(payload: ParaleloEntity[]): Promise<ResponseHttpModel>;
}
