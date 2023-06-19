import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import {
  CreateCareerDto,
  UpdateCareerDto,
  FilterCareerDto,
  PaginationDto,
} from '@core/dto';
import { RolEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class RolesService {
  constructor(
    @Inject(RepositoryEnum.ROL_REPOSITORY)
    private rolRepository: Repository<RolEntity>,
    private cataloguesService: CataloguesService,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.rolRepository.findAndCount({
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
    const newRol= this.rolRepository.create(payload);

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );

    newRol.modality = await this.cataloguesService.findOne(
      payload.modality.id,
    );

    newRol.state = await this.cataloguesService.findOne(payload.state.id);

    newRol.type = await this.cataloguesService.findOne(payload.type.id);

    const rolCreated = await this.rolRepository.save(newRol);

    return { data: rolCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.rolRepository.findAndCount({
      relations: ['institution', 'modality', 'state', 'type'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: number): Promise<any> {
    const rol = await this.rolRepository.findOne({
      relations: ['institution', 'modality', 'state', 'type'],
      where: {
        id,
      },
    });

    if (!rol) {
      throw new NotFoundException(`El rol con id:  ${id} no se encontro`);
    }
    return { data: rol };
  }

  async update(
    id: number,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const rol = await this.rolRepository.findOneBy({ id });
    if (!rol) {
      throw new NotFoundException(`El rol con id:  ${id} no se encontro`);
    }
    this.rolRepository.merge(rol, payload);
    const rolUpdated = await this.rolRepository.save(rol);
    return { data: rolUpdated };
  }

  async remove(id: number): Promise<ServiceResponseHttpModel> {
    const rol = await this.rolRepository.findOneBy({ id });

    if (!rol) {
      throw new NotFoundException(`El rol con id:  ${id} no se encontro`);
    }

    const rolDeleted = await this.rolRepository.softRemove(rol);

    return { data: rolDeleted };
  }

  async removeAll(payload: RolEntity[]): Promise<ServiceResponseHttpModel> {
    const rolesDeleted = await this.rolRepository.softRemove(payload);
    return { data: rolesDeleted };
  }
}
