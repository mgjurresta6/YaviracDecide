import { CareerEntity, CatalogueEntity } from '@core/entities';
export declare class CurriculumDto {
    readonly career: CareerEntity;
    readonly state: CatalogueEntity;
    readonly code: string;
    readonly description: string;
    readonly endedAt: Date;
    readonly name: string;
    readonly periodicAcademicNumber: number;
    readonly resolutionNumber: string;
    readonly startedAt: Date;
    readonly weeksNumber: number;
}
