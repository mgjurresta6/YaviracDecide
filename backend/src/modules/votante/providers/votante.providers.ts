import { DataSource } from 'typeorm';
import { VotoEntity } from '../entities/voto.entity';
import { RepositoryEnum } from 'src/shared/enums/repository.enum';
import { DataSourceEnum } from 'src/shared/enums/data-source.enums';

export const votanteProviders = [
  {
    provide: RepositoryEnum.VOTO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(VotoEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
];
