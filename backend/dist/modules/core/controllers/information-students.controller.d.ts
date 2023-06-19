import { CreateInformationStudentDto, FilterInformationStudentDto, UpdateInformationStudentDto } from '@core/dto';
import { InformationStudentEntity } from '@core/entities';
import { InformationStudentsService } from '@core/services';
import { ResponseHttpModel } from '@shared/models';
export declare class InformationStudentsController {
    private informationStudentsService;
    constructor(informationStudentsService: InformationStudentsService);
    create(payload: CreateInformationStudentDto): Promise<ResponseHttpModel>;
    findAll(params: FilterInformationStudentDto): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateInformationStudentDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: InformationStudentEntity[]): Promise<ResponseHttpModel>;
}
