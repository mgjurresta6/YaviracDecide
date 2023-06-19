import { Repository } from 'typeorm';
import { InformationStudentEntity } from '@core/entities';
import { CreateInformationStudentDto, FilterInformationStudentDto, UpdateInformationStudentDto } from '@core/dto';
import { CataloguesService } from './catalogues.service';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class InformationStudentsService {
    private informationStudentRepository;
    private cataloguesService;
    constructor(informationStudentRepository: Repository<InformationStudentEntity>, cataloguesService: CataloguesService);
    create(payload: CreateInformationStudentDto): Promise<ServiceResponseHttpModel>;
    findAll(params?: FilterInformationStudentDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<ServiceResponseHttpModel>;
    update(id: string, payload: UpdateInformationStudentDto): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: InformationStudentEntity[]): Promise<ServiceResponseHttpModel>;
    private paginateAndFilter;
    private filterByCommunity;
}
