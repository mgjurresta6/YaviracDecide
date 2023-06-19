import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import {
  CreateCareerDto,
  UpdateCareerDto,
  FilterCareerDto,
  PaginationDto,
} from '@core/dto';
import { VotoEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class VotosService {
  constructor(
    @Inject(RepositoryEnum.VOTO_REPOSITORY)
    private votoRepository: Repository<VotoEntity>,
    private cataloguesService: CataloguesService,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.votoRepository.findAndCount({
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
    const newVoto = this.votoRepository.create(payload);

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );

    newVoto.modality = await this.cataloguesService.findOne(
      payload.modality.id,
    );

    newVoto.state = await this.cataloguesService.findOne(payload.state.id);

    newVoto.type = await this.cataloguesService.findOne(payload.type.id);

    const votoCreated = await this.votoRepository.save(newVoto);

    return { data: votoCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.votoRepository.findAndCount({
      relations: ['institution', 'modality', 'state', 'type'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: string): Promise<any> {
    const voto = await this.votoRepository.findOne({
      relations: ['institution', 'modality', 'state', 'type'],
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
