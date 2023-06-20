"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coreProviders = void 0;
const actividad_entity_1 = require("../entities/actividad.entity");
const carrera_entity_1 = require("../entities/carrera.entity");
const configuracion_entity_1 = require("../entities/configuracion.entity");
const cronograma_entity_1 = require("../entities/cronograma.entity");
const curso_entity_1 = require("../entities/curso.entity");
const jornada_entity_1 = require("../entities/jornada.entity");
const paralelo_entity_1 = require("../entities/paralelo.entity");
const periodolectivo_entity_1 = require("../entities/periodolectivo.entity");
const resultado_entity_1 = require("../entities/resultado.entity");
const rol_entity_1 = require("../entities/rol.entity");
const usuario_entity_1 = require("../entities/usuario.entity");
const usuariotipo_entity_1 = require("../entities/usuariotipo.entity");
const dignidad_entity_1 = require("../entities/dignidad.entity");
const lista_entity_1 = require("../entities/lista.entity");
const tipolista_entity_1 = require("../entities/tipolista.entity");
const voto_entity_1 = require("../entities/voto.entity");
const repository_enum_1 = require("../../../shared/enums/repository.enum");
const enums_1 = require("../../../shared/enums");
exports.coreProviders = [
    {
        provide: repository_enum_1.RepositoryEnum.ACTIVIDAD_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(actividad_entity_1.ActividadEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.CARRERA_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(carrera_entity_1.CarreraEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.CONFIGURACION_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(configuracion_entity_1.ConfiguracionEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.CRONOGRAMA_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(cronograma_entity_1.CronogramaEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.CURSO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(curso_entity_1.CursoEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.JORNADA_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(jornada_entity_1.JornadaEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.PARALELO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(paralelo_entity_1.ParaleloEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.PERIODO_LECTIVO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(periodolectivo_entity_1.PeriodoEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.RESULTADO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(resultado_entity_1.ResultadoEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.ROL_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(rol_entity_1.RolEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.USUARIO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(usuario_entity_1.UsuarioEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.USUARIO_TIPO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(usuariotipo_entity_1.TipoEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.DIGNIDAD_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(dignidad_entity_1.DignidadEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.LISTA_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(lista_entity_1.ListaEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.TIPO_LISTA_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(tipolista_entity_1.TipoListaEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: repository_enum_1.RepositoryEnum.VOTO_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(voto_entity_1.VotoEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
];
//# sourceMappingURL=core.providers.js.map