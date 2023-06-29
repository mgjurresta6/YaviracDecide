import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { ActividadEntity, PeriodoEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class PeriodosService {
  constructor(
    @Inject(RepositoryEnum.PERIODO_REPOSITORY)
    private periodolectivoRepository: Repository<PeriodoEntity>,
  ) {}
/*
  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.periodolectivoRepository.findAndCount({
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
    const newPeriodoLectivo = this.periodolectivoRepository.create(payload);
    const periodoCreated = await this.periodolectivoRepository.save(newPeriodoLectivo);

    return { data: periodoCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.periodolectivoRepository.findAndCount({
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: number): Promise<any> {
    const periodo = await this.periodolectivoRepository.findOne({
      where: {
        id,
      },
    });

    if (!periodo) {
      throw new NotFoundException(`El periodo con id:  ${id} no se encontro`);
    }
    return { data: periodo };
  }

  async update(
    id: number,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const periodo = await this.periodolectivoRepository.findOneBy({ id });
    if (!periodo) {
      throw new NotFoundException(`El periodo con id:  ${id} no se encontro`);
    }
    this.periodolectivoRepository.merge(periodo, payload);
    const periodoUpdated = await this.periodolectivoRepository.save(periodo);
    return { data: periodoUpdated };
  }

  async remove(id: number): Promise<ServiceResponseHttpModel> {
    const periodo = await this.periodolectivoRepository.findOneBy({ id });

    if (!periodo) {
      throw new NotFoundException(`El periodo con id:  ${id} no se encontro`);
    }

    const periodoDeleted = await this.periodolectivoRepository.softRemove(periodo);

    return { data: periodoDeleted };
  }

  async removeAll(payload: PeriodoEntity[]): Promise<ServiceResponseHttpModel> {
    const periodosDeleted = await this.periodolectivoRepository.softRemove(payload);
    return { data: periodosDeleted };
  }*/
}
