import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { TipoListaEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class TipoListasService {
  constructor(
    @Inject(RepositoryEnum.TIPO_LISTA_REPOSITORY)
    private tipolistaRepository: Repository<TipoListaEntity>,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.tipolistaRepository.findAndCount({
      take: 1000,
    });

    return {
      pagination: {
        totalItems: response[1],
        limit: 10,
      },
      data: response[0],
    };
  }

  async create(payload: any): Promise<ServiceResponseHttpModel> {
    const newTipoLista = this.tipolistaRepository.create(payload);
    const tipolistaCreated = await this.tipolistaRepository.save(newTipoLista);

    return { data: tipolistaCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.tipolistaRepository.findAndCount({
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: number): Promise<any> {
    const tipoLista = await this.tipolistaRepository.findOne({
      where: {
        id,
      },
    });

    if (!tipoLista) {
      throw new NotFoundException(`El tipo de lista con id:  ${id} no se encontro`);
    }
    return { data: tipoLista };
  }

  async update(
    id: number,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const tipoLista = await this.tipolistaRepository.findOneBy({ id });
    if (!tipoLista) {
      throw new NotFoundException(`El tipo de lista con id:  ${id} no se encontro`);
    }
    this.tipolistaRepository.merge(tipoLista, payload);
    const tipolistaUpdated = await this.tipolistaRepository.save(tipoLista);
    return { data: tipolistaUpdated };
  }

  async remove(id: number): Promise<ServiceResponseHttpModel> {
    const tipoLista = await this.tipolistaRepository.findOneBy({ id });

    if (!tipoLista) {
      throw new NotFoundException(`El tipo de lista con id:  ${id} no se encontro`);
    }

    const tipolistaDeleted = await this.tipolistaRepository.softRemove(tipoLista);

    return { data: tipolistaDeleted };
  }

  async removeAll(payload: TipoListaEntity[]): Promise<ServiceResponseHttpModel> {
    const tipolistasDeleted = await this.tipolistaRepository.softRemove(payload);
    return { data: tipolistasDeleted };
  }
}
