import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import {
  CreateCareerDto,
  UpdateCareerDto,
  FilterCareerDto,
  PaginationDto,
} from '@core/dto';
import { JornadaEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class JornadasService {
  constructor(
    @Inject(RepositoryEnum.JORNADA_REPOSITORY)
    private jornadasRepository: Repository<JornadaEntity>,
    private cataloguesService: CataloguesService,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.jornadasRepository.findAndCount({
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
    const newJornada= this.jornadasRepository.create(payload);

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );

    newJornada.modality = await this.cataloguesService.findOne(
      payload.modality.id,
    );

    newJornada.state = await this.cataloguesService.findOne(payload.state.id);

    newJornada.type = await this.cataloguesService.findOne(payload.type.id);

    const jornadaCreated = await this.jornadasRepository.save(newJornada);

    return { data: jornadaCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.jornadasRepository.findAndCount({
      relations: ['institution', 'modality', 'state', 'type'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: number): Promise<any> {
    const jornada = await this.jornadasRepository.findOne({
      relations: ['institution', 'modality', 'state', 'type'],
      where: {
        id,
      },
    });

    if (!jornada) {
      throw new NotFoundException(`La jornada con id:  ${id} no se encontro`);
    }
    return { data: jornada };
  }

  async update(
    id: number,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const jornada = await this.jornadasRepository.findOneBy({ id });
    if (!jornada) {
      throw new NotFoundException(`La actividad con id:  ${id} no se encontro`);
    }
    this.jornadasRepository.merge(jornada, payload);
    const jornadaUpdated = await this.jornadasRepository.save(jornada);
    return { data: jornadaUpdated };
  }

  async remove(id: number): Promise<ServiceResponseHttpModel> {
    const jornada = await this.jornadasRepository.findOneBy({ id });

    if (!jornada) {
      throw new NotFoundException(`La jornada con id:  ${id} no se encontro`);
    }

    const jornadaDeleted = await this.jornadasRepository.softRemove(jornada);

    return { data: jornada };
  }

  async removeAll(payload: JornadaEntity[]): Promise<ServiceResponseHttpModel> {
    const jornadasDeleted = await this.jornadasRepository.softRemove(payload);
    return { data: jornadasDeleted };
  }
}
