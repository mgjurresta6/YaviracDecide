import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import {
  CreateCareerDto,
  UpdateCareerDto,
  FilterCareerDto,
  PaginationDto,
} from '@core/dto';
import { TipoListaEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class TipoListasService {
  constructor(
    @Inject(RepositoryEnum.TIPO_LISTA_REPOSITORY)
    private tipolistaRepository: Repository<TipoListaEntity>,
    private cataloguesService: CataloguesService,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.tipolistaRepository.findAndCount({
      relations: ['institution', 'modality', 'state', 'type'],
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

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );

    newTipoLista.modality = await this.cataloguesService.findOne(
      payload.modality.id,
    );

    newTipoLista.state = await this.cataloguesService.findOne(payload.state.id);

    newTipoLista.type = await this.cataloguesService.findOne(payload.type.id);

    const tipolistaCreated = await this.tipolistaRepository.save(newTipoLista);

    return { data: tipolistaCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.tipolistaRepository.findAndCount({
      relations: ['institution', 'modality', 'state', 'type'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: number): Promise<any> {
    const tipoLista = await this.tipolistaRepository.findOne({
      relations: ['institution', 'modality', 'state', 'type'],
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
