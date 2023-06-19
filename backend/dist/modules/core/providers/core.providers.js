"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coreProviders = void 0;
const entities_1 = require("../entities");
const enums_1 = require("../../../shared/enums");
exports.coreProviders = [
    {
        provide: enums_1.RepositoryEnum.CAREER_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.CareerEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.RepositoryEnum.CATALOGUE_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.CatalogueEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.RepositoryEnum.CURRICULUM_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.CurriculumEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.RepositoryEnum.INFORMATION_STUDENT_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.InformationStudentEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.RepositoryEnum.INFORMATION_TEACHER_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.InformationTeacherEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.RepositoryEnum.INSTITUTION_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.InstitutionEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.RepositoryEnum.STUDENT_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.StudentEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.RepositoryEnum.SUBJECT_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.SubjectEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
];
//# sourceMappingURL=core.providers.js.map