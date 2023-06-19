import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import {
  CreateCareerDto,
  UpdateCareerDto,
  FilterCareerDto,
  PaginationDto,
} from '@core/dto';
import { ConfiguracionEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class ConfiguracionesService {
  constructor(
    @Inject(RepositoryEnum.CONFIGURACION_REPOSITORY)
    private configuracionRepository: Repository<ConfiguracionEntity>,
    private cataloguesService: CataloguesService,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.configuracionRepository.findAndCount({
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
    const newConfiguracion = this.configuracionRepository.create(payload);

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );

    newConfiguracion.modality = await this.cataloguesService.findOne(
      payload.modality.id,
    );

    newConfiguracion.state = await this.cataloguesService.findOne(payload.state.id);

    newConfiguracion.type = await this.cataloguesService.findOne(payload.type.id);

    const configuracionCreated = await this.configuracionRepository.save(newConfiguracion);

    return { data: configuracionCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.configuracionRepository.findAndCount({
      relations: ['institution', 'modality', 'state', 'type'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }

  async findOne(id: string): Promise<any> {
    const configuracion = await this.configuracionRepository.findOne({
      relations: ['institution', 'modality', 'state', 'type'],
      where: {
        id,
      },
    });

    if (!configuracion) {
      throw new NotFoundException(`La configuracion con id:  ${id} no se encontro`);
    }
    return { data: configuracion };
  }

  async update(
    id: string,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const configuracion = await this.configuracionRepository.findOneBy({ id });
    if (!configuracion) {
      throw new NotFoundException(`La configuracion con id:  ${id} no se encontro`);
    }
    this.configuracionRepository.merge(configuracion, payload);
    const configuracionUpdated = await this.configuracionRepository.save(configuracion);
    return { data: configuracionUpdated };
  }

  async remove(id: string): Promise<ServiceResponseHttpModel> {
    const configuracion = await this.configuracionRepository.findOneBy({ id });

    if (!configuracion) {
      throw new NotFoundException(`La configuracion con id:  ${id} no se encontro`);
    }

    const configuracionDeleted = await this.configuracionRepository.softRemove(configuracion);

    return { data: configuracionDeleted };
  }

  async removeAll(payload: ConfiguracionEntity[]): Promise<ServiceResponseHttpModel> {
    const configuracionesDeleted = await this.configuracionRepository.softRemove(payload);
    return { data: configuracionesDeleted };
  }
}
