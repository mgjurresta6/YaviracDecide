import { ResponseHttpModel } from '@shared/models';
import { CataloguesService } from '@core/services';
import { CreateCatalogueDto, FilterCatalogueDto, UpdateCatalogueDto } from '@core/dto';
import { CatalogueEntity } from '@core/entities';
import { CatalogueTypeEnum } from '@shared/enums';
export declare class CataloguesController {
    private catalogueService;
    constructor(catalogueService: CataloguesService);
    create(payload: CreateCatalogueDto): Promise<{
        data: CatalogueEntity;
        message: string;
    }>;
    catalogue(type: CatalogueTypeEnum): Promise<ResponseHttpModel>;
    findAll(params: FilterCatalogueDto): Promise<{
        data: CatalogueEntity[] | import("../../auth/dto").ReadUserDto[];
        pagination: {
            limit: number;
            totalItems: number;
        } | {
            totalItems: number;
            limit: number;
        };
        message: string;
    }>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateCatalogueDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<{
        data: boolean;
        message: string;
        title: string;
    }>;
    removeAll(payload: CatalogueEntity[]): Promise<{
        data: {
            data: CatalogueEntity[];
        };
        message: string;
        title: string;
    }>;
}
