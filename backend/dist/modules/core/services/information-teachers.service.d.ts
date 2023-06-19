import { Repository } from 'typeorm';
import { CreateInformationTeacherDto, FilterInformationTeacherDto, UpdateInformationTeacherDto } from '@core/dto';
import { InformationTeacherEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class InformationTeachersService {
    private InformationTeacherRepository;
    private catalogueService;
    constructor(InformationTeacherRepository: Repository<InformationTeacherEntity>, catalogueService: CataloguesService);
    create(payload: CreateInformationTeacherDto): Promise<ServiceResponseHttpModel>;
    findAll(params?: FilterInformationTeacherDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<ServiceResponseHttpModel>;
    update(id: string, payload: UpdateInformationTeacherDto): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: InformationTeacherEntity[]): Promise<ServiceResponseHttpModel>;
    private paginateAndFilter;
    private filterByHolidays;
}
