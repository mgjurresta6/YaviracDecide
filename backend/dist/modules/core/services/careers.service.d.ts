import { Repository } from 'typeorm';
import { CreateCareerDto, UpdateCareerDto, FilterCareerDto } from '@core/dto';
import { CareerEntity } from '@core/entities';
import { InstitutionsService, CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class CareersService {
    private careerRepository;
    private institutionService;
    private cataloguesService;
    constructor(careerRepository: Repository<CareerEntity>, institutionService: InstitutionsService, cataloguesService: CataloguesService);
    catalogue(): Promise<ServiceResponseHttpModel>;
    create(payload: CreateCareerDto): Promise<ServiceResponseHttpModel>;
    findAll(params?: FilterCareerDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: UpdateCareerDto): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: CareerEntity[]): Promise<ServiceResponseHttpModel>;
    private paginateAndFilter;
}
