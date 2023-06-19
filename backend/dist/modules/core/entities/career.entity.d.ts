import { CatalogueEntity, InstitutionEntity } from '@core/entities';
export declare class CareerEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    institution: InstitutionEntity;
    modality: CatalogueEntity;
    state: CatalogueEntity;
    type: CatalogueEntity;
    acronym: string;
    code: string;
    codeSniese: string;
    degree: string;
    logo: string;
    name: string;
    resolutionNumber: string;
    shortName: string;
}
