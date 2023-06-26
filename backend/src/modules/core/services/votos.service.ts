import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { VotoEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';
import { ListasService } from '@core/services';

@Injectable()
export class VotosService {
  constructor(
    @Inject(RepositoryEnum.VOTO_REPOSITORY)
    private votoRepository: Repository<VotoEntity>,
    private listasService: ListasService
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.votoRepository.findAndCount({
      relations: ['lista'],
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

  async create(payload: VotoEntity): Promise<ServiceResponseHttpModel> {
    const newVoto = this.votoRepository.create(payload);

    newVoto.lista = await this.listasService.findOne(payload.lista.id)

    const votoCreated = await this.votoRepository.save(newVoto);

    return { data: votoCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.votoRepository.findAndCount({
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: string): Promise<any> {
    const voto = await this.votoRepository.findOne({
      where: {
        id,
      },
    });

    if (!voto) {
      throw new NotFoundException(`El voto con id:  ${id} no se encontro`);
    }
    return { data: voto };
  }

  async update(
    id: string,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const voto = await this.votoRepository.findOneBy({ id });
    if (!voto) {
      throw new NotFoundException(`El voto con id:  ${id} no se encontro`);
    }
    this.votoRepository.merge(voto, payload);
    const votoUpdated = await this.votoRepository.save(voto);
    return { data: votoUpdated };
  }

  async remove(id: string): Promise<ServiceResponseHttpModel> {
    const voto = await this.votoRepository.findOneBy({ id });

    if (!voto) {
      throw new NotFoundException(`El voto con id:  ${id} no se encontro`);
    }

    const votoDeleted = await this.votoRepository.softRemove(voto);

    return { data: votoDeleted };
  }

  async removeAll(payload: VotoEntity[]): Promise<ServiceResponseHttpModel> {
    const votosDeleted = await this.votoRepository.softRemove(payload);
    return { data: votosDeleted };
  }
}
