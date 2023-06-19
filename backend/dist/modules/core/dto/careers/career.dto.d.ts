import { InstitutionEntity, CatalogueEntity } from '@core/entities';
export declare class CareerDto {
    readonly institution: InstitutionEntity;
    readonly modality: CatalogueEntity;
    readonly state: CatalogueEntity;
    readonly type: CatalogueEntity;
    readonly acronym: string;
    readonly code: string;
    readonly codeSniese: string;
    readonly degree: string;
    readonly logo: string;
    readonly name: string;
    readonly resolutionNumber: string;
    readonly shortName: string;
}
