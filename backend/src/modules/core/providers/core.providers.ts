import { DataSource } from 'typeorm';
import { ActividadEntity, CarreraEntity, ConfiguracionEntity, CatalogueEntity, CronogramaEntity,
CursoEntity, JornadaEntity, ParaleloEntity, PeriodoEntity, ResultadoEntity, RolEntity, UsuarioEntity,
VotoEntity, TipoEntity, TipoListaEntity, DignidadEntity, ListaEntity } from '@core/entities';
import { RepositoryEnum } from 'src/shared/enums/repository.enum';
import { DataSourceEnum } from '@shared/enums';


export const coreProviders = [
  {
    provide: RepositoryEnum.ACTIVIDAD_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ActividadEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.CARRERA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CarreraEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.CONFIGURACION_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ConfiguracionEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.PERIODO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PeriodoEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.CRONOGRAMA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CronogramaEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.CURSO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CursoEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.JORNADA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(JornadaEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.PARALELO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ParaleloEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  
  {
    provide: RepositoryEnum.RESULTADO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ResultadoEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.ROL_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RolEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.USUARIO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UsuarioEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.USUARIO_TIPO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TipoEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.DIGNIDAD_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(DignidadEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.LISTA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ListaEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.TIPO_LISTA_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TipoListaEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.VOTO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(VotoEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.CATALOGUE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CatalogueEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
];
