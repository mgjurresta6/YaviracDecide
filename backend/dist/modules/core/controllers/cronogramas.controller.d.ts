import { FilterInformationStudentDto, UpdateInformationStudentDto } from '@core/dto';
import { CronogramaEntity } from '@core/entities';
import { CronogramasService } from '@core/services';
import { ResponseHttpModel } from '@shared/models';
export declare class CronogramasController {
    private cronogramasService;
    constructor(cronogramasService: CronogramasService);
    create(payload: any): Promise<ResponseHttpModel>;
    findAll(params: FilterInformationStudentDto): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateInformationStudentDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: CronogramaEntity[]): Promise<ResponseHttpModel>;
}
