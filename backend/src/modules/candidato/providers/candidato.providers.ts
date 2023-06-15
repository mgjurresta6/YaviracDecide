import { DataSource } from 'typeorm';
import { DignidadEntity } from '../entities/dignidad.entity';
import { ListaEntity } from '../entities/lista.entity';
import { TipoListaEntity } from '../entities/tipolista.entity';
import { RepositoryEnum } from 'src/shared/enums/repository.enum';
import { DataSourceEnum } from 'src/shared/enums/data-source.enums';

export const candidatoProviders = [
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
];
