import { DataSource } from 'typeorm';
import { ActividadEntity, CarreraEntity, ConfiguracionEntity, CatalogueEntity, CronogramaEntity, CursoEntity, JornadaEntity, ParaleloEntity, PeriodoEntity, ResultadoEntity, RolEntity, UsuarioEntity, VotoEntity, TipoEntity, TipoListaEntity, DignidadEntity, ListaEntity } from '@core/entities';
import { RepositoryEnum } from 'src/shared/enums/repository.enum';
import { DataSourceEnum } from '@shared/enums';
export declare const coreProviders: ({
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ActividadEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CarreraEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ConfiguracionEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<PeriodoEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CronogramaEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CursoEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<JornadaEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ParaleloEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ResultadoEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<RolEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<UsuarioEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<TipoEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<DignidadEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ListaEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<TipoListaEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<VotoEntity>;
    inject: DataSourceEnum[];
} | {
    provide: RepositoryEnum;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CatalogueEntity>;
    inject: DataSourceEnum[];
})[];
