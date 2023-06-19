import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import {
  CreateCareerDto,
  UpdateCareerDto,
  FilterCareerDto,
  PaginationDto,
} from '@core/dto';
import { ResultadoEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class ResultadosService {
  constructor(
    @Inject(RepositoryEnum.RESULTADO_REPOSITORY)
    private resultadoRepository: Repository<ResultadoEntity>,
    private cataloguesService: CataloguesService,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.resultadoRepository.findAndCount({
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
    const newResultado = this.resultadoRepository.create(payload);

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );

    newResultado.modality = await this.cataloguesService.findOne(
      payload.modality.id,
    );

    newResultado.state = await this.cataloguesService.findOne(payload.state.id);

    newResultado.type = await this.cataloguesService.findOne(payload.type.id);

    const resultadoCreated = await this.resultadoRepository.save(newResultado);

    return { data: resultadoCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.resultadoRepository.findAndCount({
      relations: ['institution', 'modality', 'state', 'type'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: string): Promise<any> {
    const resultado = await this.resultadoRepository.findOne({
      relations: ['institution', 'modality', 'state', 'type'],
      where: {
        id,
      },
    });

    if (!resultado) {
      throw new NotFoundException(`El resultado con id:  ${id} no se encontro`);
    }
    return { data: resultado };
  }

  async update(
    id: string,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const resultado = await this.resultadoRepository.findOneBy({ id });
    if (!resultado) {
      throw new NotFoundException(`El resultado con id:  ${id} no se encontro`);
    }
    this.resultadoRepository.merge(resultado, payload);
    const resultadoUpdated = await this.resultadoRepository.save(resultado);
    return { data: resultadoUpdated };
  }

  async remove(id: string): Promise<ServiceResponseHttpModel> {
    const resultado = await this.resultadoRepository.findOneBy({ id });

    if (!resultado) {
      throw new NotFoundException(`El resultado con id:  ${id} no se encontro`);
    }

    const resultadoDeleted = await this.resultadoRepository.softRemove(resultado);

    return { data: resultadoDeleted };
  }

  async removeAll(payload: ResultadoEntity[]): Promise<ServiceResponseHttpModel> {
    const resultadosDeleted = await this.resultadoRepository.softRemove(payload);
    return { data: resultadosDeleted };
  }
}
