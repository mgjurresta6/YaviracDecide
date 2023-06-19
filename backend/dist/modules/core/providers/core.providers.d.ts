import { DataSource } from 'typeorm';
import { ActividadEntity } from '../entities/actividad.entity';
import { CarreraEntity } from '../entities/carrera.entity';
import { ConfiguracionEntity } from '../entities/configuracion.entity';
import { CronogramaEntity } from '../entities/cronograma.entity';
import { CursoEntity } from '../entities/curso.entity';
import { JornadaEntity } from '../entities/jornada.entity';
import { ParaleloEntity } from '../entities/paralelo.entity';
import { PeriodoEntity } from '../entities/periodolectivo.entity';
import { ResultadoEntity } from '../entities/resultado.entity';
import { RolEntity } from '../entities/rol.entity';
import { UsuarioEntity } from '../entities/usuario.entity';
import { TipoEntity } from '../entities/usuariotipo.entity';
import { DignidadEntity } from '../entities/dignidad.entity';
import { ListaEntity } from '../entities/lista.entity';
import { TipoListaEntity } from '../entities/tipolista.entity';
import { VotoEntity } from '../entities/voto.entity';
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
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<PeriodoEntity>;
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
})[];
