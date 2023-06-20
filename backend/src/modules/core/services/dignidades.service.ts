import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { DignidadEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class DignidadesService {
  constructor(
    @Inject(RepositoryEnum.DIGNIDAD_REPOSITORY)
    private dignidadRepository: Repository<DignidadEntity>,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.dignidadRepository.findAndCount({
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
    const newDignidad = this.dignidadRepository.create(payload);

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );
    const dignidadCreated = await this.dignidadRepository.save(newDignidad);

    return { data: dignidadCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.dignidadRepository.findAndCount({
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: number): Promise<any> {
    const dignidad = await this.dignidadRepository.findOne({
      where: {
        id,
      },
    });

    if (!dignidad) {
      throw new NotFoundException(`La dignidad con id:  ${id} no se encontro`);
    }
    return { data: dignidad };
  }

  async update(
    id: number,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const dignidad = await this.dignidadRepository.findOneBy({ id });
    if (!dignidad) {
      throw new NotFoundException(`La dignidad con id:  ${id} no se encontro`);
    }
    this.dignidadRepository.merge(dignidad, payload);
    const dignidadUpdated = await this.dignidadRepository.save(dignidad);
    return { data: dignidadUpdated };
  }

  async remove(id: number): Promise<ServiceResponseHttpModel> {
    const dignidad = await this.dignidadRepository.findOneBy({ id });

    if (!dignidad) {
      throw new NotFoundException(`La dignidad con id:  ${id} no se encontro`);
    }

    const dignidadDeleted = await this.dignidadRepository.softRemove(dignidad);

    return { data: dignidadDeleted };
  }

  async removeAll(payload: DignidadEntity[]): Promise<ServiceResponseHttpModel> {
    const dignidadesDeleted = await this.dignidadRepository.softRemove(payload);
    return { data: dignidadesDeleted };
  }
}
