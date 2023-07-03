"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coreProviders = void 0;
const entities_1 = require("../entities");
const repository_enum_1 = require("../../../shared/enums/repository.enum");
const enums_1 = require("../../../shared/enums");
exports.coreProviders = [
    {
        provide: repository_enum_1.RepositoryEnum.ACTIVIDAD_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.ActividadEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.CARRERA_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.CarreraEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.CONFIGURACION_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.ConfiguracionEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.PERIODO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.PeriodoEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.CRONOGRAMA_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.CronogramaEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.CURSO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.CursoEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.JORNADA_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.JornadaEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.PARALELO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.ParaleloEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.RESULTADO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.ResultadoEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.ROL_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.RolEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.USUARIO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.UsuarioEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.USUARIO_TIPO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.TipoEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.DIGNIDAD_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.DignidadEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.ESTUDIANTE_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.EstudianteEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.LISTA_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.ListaEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.TIPO_LISTA_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.TipoListaEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.VOTO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.VotoEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.CATALOGUE_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.CatalogueEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    }
];
//# sourceMappingURL=core.providers.js.map