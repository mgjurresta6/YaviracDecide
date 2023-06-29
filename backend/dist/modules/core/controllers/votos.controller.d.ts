import { VotosService } from '@core/services';
import { VotoEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class VotosController {
    private votosService;
    constructor(votosService: VotosService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: any): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: VotoEntity[]): Promise<ResponseHttpModel>;
}
