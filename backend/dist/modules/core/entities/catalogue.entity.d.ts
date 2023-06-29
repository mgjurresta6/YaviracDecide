import { CatalogueTypeEnum, CatalogueStateEnum } from '@shared/enums';
export declare class CatalogueEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    parent: CatalogueEntity;
    children: CatalogueEntity[];
    code: string;
    description: string;
    isVisible: boolean;
    name: string;
    state: CatalogueStateEnum;
    type: CatalogueTypeEnum;
}
