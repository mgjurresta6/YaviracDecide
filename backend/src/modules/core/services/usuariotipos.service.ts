import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { TipoEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class TipoUsuariosService {
  constructor(
    @Inject(RepositoryEnum.TIPO_LISTA_REPOSITORY)
    private tipousuarioRepository: Repository<TipoEntity>,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.tipousuarioRepository.findAndCount({
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
    const tipousuarioCreated = await this.tipousuarioRepository.save(newTipousuario);

    return { data: tipousuarioCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.tipousuarioRepository.findAndCount({
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: number): Promise<any> {
    const tipoUsuario = await this.tipousuarioRepository.findOne({
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
