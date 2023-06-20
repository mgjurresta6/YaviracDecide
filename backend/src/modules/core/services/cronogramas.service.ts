import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { CronogramaEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class CronogramasService {
  constructor(
    @Inject(RepositoryEnum.CRONOGRAMA_REPOSITORY)
    private cronogramaRepository: Repository<CronogramaEntity>,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.cronogramaRepository.findAndCount({
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
    const newCronograma = this.cronogramaRepository.create(payload);

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );

    const cronogramaCreated = await this.cronogramaRepository.save(newCronograma);

    return { data: cronogramaCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.cronogramaRepository.findAndCount({
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: string): Promise<any> {
    const cronograma = await this.cronogramaRepository.findOne({
      where: {
        id,
      },
    });

    if (!cronograma) {
      throw new NotFoundException(`El cronograma con id:  ${id} no se encontro`);
    }
    return { data: cronograma };
  }

  async update(
    id: string,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const cronograma = await this.cronogramaRepository.findOneBy({ id });
    if (!cronograma) {
      throw new NotFoundException(`El cronograma con id:  ${id} no se encontro`);
    }
    this.cronogramaRepository.merge(cronograma, payload);
    const cronogramaUpdated = await this.cronogramaRepository.save(cronograma);
    return { data: cronogramaUpdated };
  }

  async remove(id: string): Promise<ServiceResponseHttpModel> {
    const cronograma = await this.cronogramaRepository.findOneBy({ id });

    if (!cronograma) {
      throw new NotFoundException(`El cronograma con id:  ${id} no se encontro`);
    }

    const cronogramaDeleted = await this.cronogramaRepository.softRemove(cronograma);

    return { data: cronogramaDeleted };
  }

  async removeAll(payload: CronogramaEntity[]): Promise<ServiceResponseHttpModel> {
    const cronogramasDeleted = await this.cronogramaRepository.softRemove(payload);
    return { data: cronogramasDeleted };
  }
}
