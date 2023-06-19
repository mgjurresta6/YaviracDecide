import { CatalogueEntity, CurriculumEntity } from '@core/entities';
export declare class SubjectEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    academicPeriod: CatalogueEntity;
    curriculum: CurriculumEntity;
    state: CatalogueEntity;
    type: CatalogueEntity;
    autonomousHour: number;
    code: string;
    credit: number;
    name: string;
    practicalHour: number;
    scale: number;
    teacherHour: number;
}
