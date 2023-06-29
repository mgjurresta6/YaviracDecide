import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { ListaEntity, TipoListaEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';
import {  DignidadesService } from '@core/services';


@Injectable()
export class ListasService {
  constructor(
    @Inject(RepositoryEnum.LISTA_REPOSITORY)
    private listaRepository: Repository<ListaEntity>,
    
    private dignidadesService: DignidadesService
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.listaRepository.findAndCount({
      relations: ['tipoLista', 'dignidad'],
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

  async create(payload: ListaEntity): Promise<ServiceResponseHttpModel> {
    const newLista = this.listaRepository.create(payload);

    newLista.dignidad = await this.dignidadesService.findOne(payload.dignidad.id)

    const listaCreated = await this.listaRepository.save(newLista);

    return { data: listaCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.listaRepository.findAndCount({
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: number): Promise<any> {
    const lista = await this.listaRepository.findOne({
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
    id: number,
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

  async remove(id: number): Promise<ServiceResponseHttpModel> {
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
