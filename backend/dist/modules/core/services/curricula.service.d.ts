import { Repository } from 'typeorm';
import { CreateCurriculumDto, UpdateCurriculumDto, FilterCurriculumDto } from '@core/dto';
import { CurriculumEntity } from '@core/entities';
import { CareersService, CataloguesService, InstitutionsService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class CurriculaService {
    private curriculumRepository;
    private careerService;
    private institutionsService;
    private catalogueService;
    constructor(curriculumRepository: Repository<CurriculumEntity>, careerService: CareersService, institutionsService: InstitutionsService, catalogueService: CataloguesService);
    create(payload: CreateCurriculumDto): Promise<ServiceResponseHttpModel>;
    findAll(params: FilterCurriculumDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: UpdateCurriculumDto): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: CurriculumEntity[]): Promise<ServiceResponseHttpModel>;
    private paginateAndFilter;
    private filterByWeeksNumber;
}
