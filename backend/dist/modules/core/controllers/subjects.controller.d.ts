import { CreateSubjectDto, FilterSubjectDto, UpdateSubjectDto } from '@core/dto';
import { SubjectEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
import { SubjectsService } from '@core/services';
export declare class SubjectsController {
    private subjectsService;
    constructor(subjectsService: SubjectsService);
    create(payload: CreateSubjectDto): Promise<ResponseHttpModel>;
    findAll(params: FilterSubjectDto): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateSubjectDto): Promise<{
        data: object;
        message: string;
        title: string;
    }>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: SubjectEntity[]): Promise<ResponseHttpModel>;
}
