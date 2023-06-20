import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { CarreraEntity } from '@core/entities'
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class CarrerasService {
  constructor(
    @Inject(RepositoryEnum.CARRERA_REPOSITORY)
    private carreraRepository: Repository<CarreraEntity>,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.carreraRepository.findAndCount({
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
    const newCarrera = this.carreraRepository.create(payload);

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );

    const carreraCreated = await this.carreraRepository.save(newCarrera);

    return { data: carreraCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.carreraRepository.findAndCount({
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }

  async findOne(id: string): Promise<any> {
    const carrera = await this.carreraRepository.findOne({
      where: {
        id,
      },
    });

    if (!carrera) {
      throw new NotFoundException(`La carrera con id:  ${id} no se encontro`);
    }
    return { data: carrera };
  }

  async update(
    id: string,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const carrera = await this.carreraRepository.findOneBy({ id });
    if (!carrera) {
      throw new NotFoundException(`La actividad con id:  ${id} no se encontro`);
    }
    this.carreraRepository.merge(carrera, payload);
    const carreraUpdated = await this.carreraRepository.save(carrera);
    return { data: carreraUpdated };
  }

  async remove(id: string): Promise<ServiceResponseHttpModel> {
    const carrera = await this.carreraRepository.findOneBy({ id });

    if (!carrera) {
      throw new NotFoundException(`La carrera con id:  ${id} no se encontro`);
    }

    const carreraDeleted = await this.carreraRepository.softRemove(carrera);

    return { data: carreraDeleted };
  }

  async removeAll(payload: CarreraEntity[]): Promise<ServiceResponseHttpModel> {
    const carrerasDeleted = await this.carreraRepository.softRemove(payload);
    return { data: carrerasDeleted };
  }
}
