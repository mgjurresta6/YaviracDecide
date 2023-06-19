import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import {
  CreateCareerDto,
  UpdateCareerDto,
  FilterCareerDto,
  PaginationDto,
} from '@core/dto';
import { ActividadEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class ActividadesService {
  constructor(
    @Inject(RepositoryEnum.ACTIVIDAD_REPOSITORY)
    private actividadRepository: Repository<ActividadEntity>,
    private cataloguesService: CataloguesService,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.actividadRepository.findAndCount({
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
    const newActividad = this.actividadRepository.create(payload);

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );

    newActividad.modality = await this.cataloguesService.findOne(
      payload.modality.id,
    );

    newActividad.state = await this.cataloguesService.findOne(payload.state.id);

    newActividad.type = await this.cataloguesService.findOne(payload.type.id);

    const actividadCreated = await this.actividadRepository.save(newActividad);

    return { data: actividadCreated };
  }

  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.actividadRepository.findAndCount({
      relations: ['institution', 'modality', 'state', 'type'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }

  async findOne(id: string): Promise<any> {
    const actividad = await this.actividadRepository.findOne({
      relations: ['institution', 'modality', 'state', 'type'],
      where: {
        id,
      },
    });

    if (!actividad) {
      throw new NotFoundException(`La actividad con id:  ${id} no se encontro`);
    }
    return { data: actividad };
  }

  async update(
    id: string,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const actividad = await this.actividadRepository.findOneBy({ id });
    if (!actividad) {
      throw new NotFoundException(`La actividad con id:  ${id} no se encontro`);
    }
    this.actividadRepository.merge(actividad, payload);
    const actividadUpdated = await this.actividadRepository.save(actividad);
    return { data: actividadUpdated };
  }

  async remove(id: string): Promise<ServiceResponseHttpModel> {
    const actividad = await this.actividadRepository.findOneBy({ id });

    if (!actividad) {
      throw new NotFoundException(`La actividad con id:  ${id} no se encontro`);
    }

    const actividadDeleted = await this.actividadRepository.softRemove(actividad);

    return { data: actividadDeleted };
  }

  async removeAll(payload: ActividadEntity[]): Promise<ServiceResponseHttpModel> {
    const actividadesDeleted = await this.actividadRepository.softRemove(payload);
    return { data: actividadesDeleted };
  }
}
