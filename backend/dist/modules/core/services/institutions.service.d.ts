import { Repository } from 'typeorm';
import { CreateInstitutionDto, FilterInstitutionDto, UpdateInstitutionDto } from '@core/dto';
import { InstitutionEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class InstitutionsService {
    private institutionRepository;
    private cataloguesService;
    constructor(institutionRepository: Repository<InstitutionEntity>, cataloguesService: CataloguesService);
    create(payload: CreateInstitutionDto): Promise<ServiceResponseHttpModel>;
    findAll(params?: FilterInstitutionDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<any>;
    update(id: string, payload: UpdateInstitutionDto): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: InstitutionEntity[]): Promise<ServiceResponseHttpModel>;
    private paginateAndFilter;
}
