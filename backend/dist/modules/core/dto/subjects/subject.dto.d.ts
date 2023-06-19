import { CatalogueEntity, CurriculumEntity } from '@core/entities';
export declare class SubjectDto {
    readonly academicPeriod: CatalogueEntity;
    readonly curriculum: CurriculumEntity;
    readonly state: CatalogueEntity;
    readonly type: CatalogueEntity;
    readonly autonomousHour: number;
    readonly code: string;
    readonly credit: number;
    readonly name: string;
    readonly practicalHour: number;
    readonly scale: number;
    readonly teacherHour: number;
}
