import { Repository } from 'typeorm';
import { CreateCatalogueDto, FilterCatalogueDto, UpdateCatalogueDto } from '@core/dto';
import { CatalogueEntity } from '@core/entities';
import { CatalogueTypeEnum } from '@shared/enums';
import { ReadUserDto } from '@auth/dto';
export declare class CataloguesService {
    private repository;
    constructor(repository: Repository<CatalogueEntity>);
    create(payload: CreateCatalogueDto): Promise<any>;
    catalogue(type: CatalogueTypeEnum): Promise<{
        pagination: {
            totalItems: number;
            limit: number;
        };
        data: CatalogueEntity[];
    }>;
    findAll(params?: FilterCatalogueDto): Promise<{
        data: ReadUserDto[];
        pagination: {
            limit: FilterCatalogueDto;
            totalItems: number;
        };
    } | {
        data: CatalogueEntity[];
        pagination: {
            totalItems: number;
            limit: number;
        };
    }>;
    findOne(id: string): Promise<CatalogueEntity>;
    update(id: string, payload: UpdateCatalogueDto): Promise<any>;
    remove(id: string): Promise<boolean>;
    removeAll(payload: CatalogueEntity[]): Promise<{
        data: any[];
    }>;
    private paginateAndFilter;
}
