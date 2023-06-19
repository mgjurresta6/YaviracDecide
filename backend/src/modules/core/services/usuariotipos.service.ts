import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import {
  CreateCareerDto,
  UpdateCareerDto,
  FilterCareerDto,
  PaginationDto,
} from '@core/dto';
import { TipoEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class TipoUsuariosService {
  constructor(
    @Inject(RepositoryEnum.TIPO_LISTA_REPOSITORY)
    private tipousuarioRepository: Repository<TipoEntity>,
    private cataloguesService: CataloguesService,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.tipousuarioRepository.findAndCount({
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
    const newTipousuario = this.tipousuarioRepository.create(payload);

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );

    newTipousuario.modality = await this.cataloguesService.findOne(
      payload.modality.id,
    );

    newTipousuario.state = await this.cataloguesService.findOne(payload.state.id);

    newTipousuario.type = await this.cataloguesService.findOne(payload.type.id);

    const tipousuarioCreated = await this.tipousuarioRepository.save(newTipousuario);

    return { data: tipousuarioCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.tipousuarioRepository.findAndCount({
      relations: ['institution', 'modality', 'state', 'type'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: number): Promise<any> {
    const tipoUsuario = await this.tipousuarioRepository.findOne({
      relations: ['institution', 'modality', 'state', 'type'],
      where: {
        id,
      },
    });

    if (!tipoUsuario) {
      throw new NotFoundException(`El tipo de usuario con id:  ${id} no se encontro`);
    }
    return { data: tipoUsuario };
  }

  async update(
    id: number,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const tipoUsuario = await this.tipousuarioRepository.findOneBy({ id });
    if (!tipoUsuario) {
      throw new NotFoundException(`El tipo de usuario con id:  ${id} no se encontro`);
    }
    this.tipousuarioRepository.merge(tipoUsuario, payload);
    const tipousuarioUpdated = await this.tipousuarioRepository.save(tipoUsuario);
    return { data: tipousuarioUpdated };
  }

  async remove(id: number): Promise<ServiceResponseHttpModel> {
    const tipoUsuario = await this.tipousuarioRepository.findOneBy({ id });

    if (!tipoUsuario) {
      throw new NotFoundException(`El tipo de usuario con id:  ${id} no se encontro`);
    }

    const tipousuarioDeleted = await this.tipousuarioRepository.softRemove(tipoUsuario);

    return { data: tipousuarioDeleted };
  }

  async removeAll(payload: TipoEntity[]): Promise<ServiceResponseHttpModel> {
    const tipousuariosDeleted = await this.tipousuarioRepository.softRemove(payload);
    return { data: tipousuariosDeleted };
  }
}
