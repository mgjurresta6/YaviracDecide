import { DataSource } from 'typeorm';
import { CareerEntity, CatalogueEntity, CurriculumEntity, InformationStudentEntity, InformationTeacherEntity, InstitutionEntity, StudentEntity, SubjectEntity } from '@core/entities';
import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
export declare const coreProviders: ({
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CareerEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CatalogueEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CurriculumEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<InformationStudentEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<InformationTeacherEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<InstitutionEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<StudentEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<SubjectEntity>;
    inject: DataSourceEnum[];
})[];
