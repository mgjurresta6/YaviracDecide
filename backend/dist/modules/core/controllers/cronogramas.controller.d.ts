import { CronogramaEntity } from '@core/entities';
import { CronogramasService } from '@core/services';
import { ResponseHttpModel } from '@shared/models';
export declare class CronogramasController {
    private cronogramasService;
    constructor(cronogramasService: CronogramasService);
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: any): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: any): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: CronogramaEntity[]): Promise<ResponseHttpModel>;
}
