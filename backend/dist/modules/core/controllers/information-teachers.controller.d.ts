import { CreateInformationTeacherDto, FilterInformationTeacherDto, UpdateInformationTeacherDto } from '@core/dto';
import { InformationTeacherEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
import { InformationTeachersService } from '@core/services';
export declare class InformationTeachersController {
    private informationTeachersService;
    constructor(informationTeachersService: InformationTeachersService);
    create(payload: CreateInformationTeacherDto): Promise<ResponseHttpModel>;
    findAll(params: FilterInformationTeacherDto): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateInformationTeacherDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: InformationTeacherEntity[]): Promise<ResponseHttpModel>;
}
