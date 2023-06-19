import { CareerEntity, CatalogueEntity } from '@core/entities';
export declare class CurriculumEntity {
    id: string;
    endedAt: Date;
    startedAt: Date;
    updatedAT: Date;
    deletedAT: Date;
    career: CareerEntity;
    state: CatalogueEntity;
    code: string;
    name: string;
    description: string;
    resolutionNumber: string;
    periodicAcademicNumber: number;
    weeksNumber: number;
}
