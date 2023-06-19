import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import {
  CreateCareerDto,
  UpdateCareerDto,
  FilterCareerDto,
  PaginationDto,
} from '@core/dto';
import { ListaEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class ListasService {
  constructor(
    @Inject(RepositoryEnum.LISTA_REPOSITORY)
    private listaRepository: Repository<ListaEntity>,
    private cataloguesService: CataloguesService,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.listaRepository.findAndCount({
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
    const newLista = this.listaRepository.create(payload);

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );

    newLista.modality = await this.cataloguesService.findOne(
      payload.modality.id,
    );

    newLista.state = await this.cataloguesService.findOne(payload.state.id);

    newLista.type = await this.cataloguesService.findOne(payload.type.id);

    const listaCreated = await this.listaRepository.save(newLista);

    return { data: listaCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.listaRepository.findAndCount({
      relations: ['institution', 'modality', 'state', 'type'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: string): Promise<any> {
    const lista = await this.listaRepository.findOne({
      relations: ['institution', 'modality', 'state', 'type'],
      where: {
        id,
      },
    });

    if (!lista) {
      throw new NotFoundException(`La lista con id:  ${id} no se encontro`);
    }
    return { data: lista };
  }

  async update(
    id: string,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const lista = await this.listaRepository.findOneBy({ id });
    if (!lista) {
      throw new NotFoundException(`La lista con id:  ${id} no se encontro`);
    }
    this.listaRepository.merge(lista, payload);
    const listaUpdated = await this.listaRepository.save(lista);
    return { data: listaUpdated };
  }

  async remove(id: string): Promise<ServiceResponseHttpModel> {
    const lista = await this.listaRepository.findOneBy({ id });

    if (!lista) {
      throw new NotFoundException(`La lista con id:  ${id} no se encontro`);
    }

    const listaDeleted = await this.listaRepository.softRemove(lista);

    return { data: listaDeleted };
  }

  async removeAll(payload: ListaEntity[]): Promise<ServiceResponseHttpModel> {
    const listasDeleted = await this.listaRepository.softRemove(payload);
    return { data: listasDeleted };
  }
}
