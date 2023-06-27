import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { ParaleloEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class ParalelosService {
  constructor(
    @Inject(RepositoryEnum.PARALELO_REPOSITORY)
    private paraleloRepository: Repository<ParaleloEntity>,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.paraleloRepository.findAndCount({
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
    const newParalelo = this.paraleloRepository.create(payload);
    const paraleloCreated = await this.paraleloRepository.save(newParalelo);

    return { data: paraleloCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.paraleloRepository.findAndCount({
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: number): Promise<any> {
    const paralelo = await this.paraleloRepository.findOne({
      where: {
        id,
      },
    });

    if (!paralelo) {
      throw new NotFoundException(`El paralelo con id:  ${id} no se encontro`);
    }
    return { data: paralelo };
  }

  async update(
    id: number,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const paralelo = await this.paraleloRepository.findOneBy({ id });
    if (!paralelo) {
      throw new NotFoundException(`El paralelo con id:  ${id} no se encontro`);
    }
    this.paraleloRepository.merge(paralelo, payload);
    const paraleloUpdated = await this.paraleloRepository.save(paralelo);
    return { data: paraleloUpdated };
  }

  async remove(id: number): Promise<ServiceResponseHttpModel> {
    const paralelo = await this.paraleloRepository.findOneBy({ id });

    if (!paralelo) {
      throw new NotFoundException(`El paralelo con id:  ${id} no se encontro`);
    }

    const paraleloDeleted = await this.paraleloRepository.softRemove(paralelo);

    return { data: paraleloDeleted };
  }

  async removeAll(payload: ParaleloEntity[]): Promise<ServiceResponseHttpModel> {
    const paralelosDeleted = await this.paraleloRepository.softRemove(payload);
    return { data: paralelosDeleted };
  }
}
