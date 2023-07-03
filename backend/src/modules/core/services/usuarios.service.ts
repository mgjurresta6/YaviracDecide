import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { UsuarioEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';
import { CursosService, RolesService, TipoUsuariosService } from '@core/services';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject(RepositoryEnum.USUARIO_REPOSITORY)
    private usuarioRepository: Repository<UsuarioEntity>,
    private cursosService: CursosService,
    private rolesService: RolesService,
    private tiposService: TipoUsuariosService
   
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.usuarioRepository.findAndCount({
      relations:['curso', 'rol','tipo'],
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

  async create(payload: UsuarioEntity): Promise<ServiceResponseHttpModel> {
    const newUsuario = this.usuarioRepository.create(payload);

    /*newUsuario.curso = await this.cursosService.findOne(payload.curso.id);
    newUsuario.rol = await this.rolesService.findOne(payload.rol.id);
    newUsuario.tipo = await this.tiposService.findOne(payload.tipo.id)*/

    const usuarioCreated = await this.usuarioRepository.save(newUsuario);

    return { data: usuarioCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.usuarioRepository.findAndCount({
      relations:['curso', 'rol'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: string): Promise<any> {
    const usuario = await this.usuarioRepository.findOne({
      relations:['curso', 'rol'],
      where: {
        id,
      },
    });

    if (!usuario) {
      throw new NotFoundException(`El usuario con cedula:  ${id} no se encontro`);
    }
    return { data: id };
  }

  async update(
    id: string,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException(`El usuario con cedula:  ${id} no se encontro`);
    }
    this.usuarioRepository.merge(usuario, payload);
    const usuarioUpdated = await this.usuarioRepository.save(usuario);
    return { data: usuarioUpdated };
  }

  async remove(id: string): Promise<ServiceResponseHttpModel> {
    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) {
      throw new NotFoundException(`El usuario con cedula:  ${id} no se encontro`);
    }

    const usuarioDeleted = await this.usuarioRepository.softRemove(usuario);

    return { data: usuarioDeleted };
  }

  async removeAll(payload: UsuarioEntity[]): Promise<ServiceResponseHttpModel> {
    const usuariosDeleted = await this.usuarioRepository.softRemove(payload);
    return { data: usuariosDeleted };
  }
}
