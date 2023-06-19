import { Repository } from 'typeorm';
import { CreateSubjectDto, FilterSubjectDto, UpdateSubjectDto } from '@core/dto';
import { SubjectEntity } from '@core/entities';
import { CataloguesService, CurriculaService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class SubjectsService {
    private subjectRepository;
    private catalogueService;
    private curriculumService;
    constructor(subjectRepository: Repository<SubjectEntity>, catalogueService: CataloguesService, curriculumService: CurriculaService);
    create(payload: CreateSubjectDto): Promise<ServiceResponseHttpModel>;
    findAll(params?: FilterSubjectDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<ServiceResponseHttpModel>;
    update(id: string, payload: UpdateSubjectDto): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: SubjectEntity[]): Promise<ServiceResponseHttpModel>;
    private paginateAndFilter;
    private filterByAutonomousHour;
}
