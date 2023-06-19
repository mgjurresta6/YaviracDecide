import { CreateInstitutionDto, FilterInstitutionDto, UpdateInstitutionDto } from '@core/dto';
import { InstitutionEntity } from '@core/entities';
import { InstitutionsService } from '@core/services';
import { ResponseHttpModel } from '@shared/models';
export declare class InstitutionsController {
    private instituteService;
    constructor(instituteService: InstitutionsService);
    create(payload: CreateInstitutionDto): Promise<ResponseHttpModel>;
    findAll(params: FilterInstitutionDto): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateInstitutionDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: InstitutionEntity[]): Promise<ResponseHttpModel>;
}
