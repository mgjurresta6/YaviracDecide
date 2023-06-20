import { ResponseHttpModel } from '@shared/models';
import { CataloguesService } from '@core/services';
import { CreateCatalogueDto, FilterCatalogueDto, UpdateCatalogueDto } from '@core/dto';
import { CatalogueEntity } from '@core/entities';
import { CatalogueTypeEnum } from '@shared/enums';
export declare class CataloguesController {
    private catalogueService;
    constructor(catalogueService: CataloguesService);
    create(payload: CreateCatalogueDto): Promise<{
        data: any;
        message: string;
    }>;
    catalogue(type: CatalogueTypeEnum): Promise<ResponseHttpModel>;
    findAll(params: FilterCatalogueDto): Promise<{
        data: any;
        pagination: any;
        message: string;
    }>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateCatalogueDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<{
        data: any;
        message: string;
        title: string;
    }>;
    removeAll(payload: CatalogueEntity[]): Promise<{
        data: any;
        message: string;
        title: string;
    }>;
}
