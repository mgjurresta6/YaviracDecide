import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import {
  CreateCareerDto,
  UpdateCareerDto,
  FilterCareerDto,
  PaginationDto,
} from '@core/dto';
import { UsuarioEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject(RepositoryEnum.USUARIO_REPOSITORY)
    private usuarioRepository: Repository<UsuarioEntity>,
    private cataloguesService: CataloguesService,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.usuarioRepository.findAndCount({
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
    const newUsuario = this.usuarioRepository.create(payload);

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );

    newUsuario.modality = await this.cataloguesService.findOne(
      payload.modality.id,
    );

    newUsuario.state = await this.cataloguesService.findOne(payload.state.id);

    newUsuario.type = await this.cataloguesService.findOne(payload.type.id);

    const usuarioCreated = await this.usuarioRepository.save(newUsuario);

    return { data: usuarioCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.usuarioRepository.findAndCount({
      relations: ['institution', 'modality', 'state', 'type'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(cedula: number): Promise<any> {
    const usuario = await this.usuarioRepository.findOne({
      relations: ['institution', 'modality', 'state', 'type'],
      where: {
        cedula,
      },
    });

    if (!usuario) {
      throw new NotFoundException(`El usuario con cedula:  ${cedula} no se encontro`);
    }
    return { data: cedula };
  }

  async update(
    cedula: number,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const usuario = await this.usuarioRepository.findOneBy({ cedula });
    if (!usuario) {
      throw new NotFoundException(`El usuario con cedula:  ${cedula} no se encontro`);
    }
    this.usuarioRepository.merge(usuario, payload);
    const usuarioUpdated = await this.usuarioRepository.save(usuario);
    return { data: usuarioUpdated };
  }

  async remove(cedula: number): Promise<ServiceResponseHttpModel> {
    const usuario = await this.usuarioRepository.findOneBy({ cedula });

    if (!usuario) {
      throw new NotFoundException(`El usuario con cedula:  ${cedula} no se encontro`);
    }

    const usuarioDeleted = await this.usuarioRepository.softRemove(usuario);

    return { data: usuarioDeleted };
  }

  async removeAll(payload: UsuarioEntity[]): Promise<ServiceResponseHttpModel> {
    const usuariosDeleted = await this.usuarioRepository.softRemove(payload);
    return { data: usuariosDeleted };
  }
}
