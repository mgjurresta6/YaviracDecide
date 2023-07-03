import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { EstudianteEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';
import { CursosService, RolesService, TipoUsuariosService } from '@core/services';

@Injectable()
export class EstudiantesService {
  constructor(
    @Inject(RepositoryEnum.ESTUDIANTE_REPOSITORY)
    private estudianteRepository: Repository<EstudianteEntity>,
    private cursosService: CursosService,
    private rolesService: RolesService,
    private tiposService: TipoUsuariosService
   
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.estudianteRepository.findAndCount({
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

  async create(payload: EstudianteEntity): Promise<ServiceResponseHttpModel> {
    const newEstudiante = this.estudianteRepository.create(payload);

    /*newUsuario.curso = await this.cursosService.findOne(payload.curso.id);
    newUsuario.rol = await this.rolesService.findOne(payload.rol.id);
    newUsuario.tipo = await this.tiposService.findOne(payload.tipo.id)*/

    const estudianteCreated = await this.estudianteRepository.save(newEstudiante);

    return { data: estudianteCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.estudianteRepository.findAndCount({
      relations:['curso', 'rol'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: string): Promise<any> {
    const estudiante = await this.estudianteRepository.findOne({
      relations:['curso', 'rol'],
      where: {
        id,
      },
    });

    if (!estudiante) {
      throw new NotFoundException(`El usuario con cedula:  ${id} no se encontro`);
    }
    return { data: id };
  }

  async update(
    id: string,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const estudiante = await this.estudianteRepository.findOneBy({ id });
    if (!estudiante) {
      throw new NotFoundException(`El estudiante con cedula:  ${id} no se encontro`);
    }
    this.estudianteRepository.merge(estudiante, payload);
    const estudianteUpdated = await this.estudianteRepository.save(estudiante);
    return { data: estudianteUpdated };
  }

  async remove(id: string): Promise<ServiceResponseHttpModel> {
    const estudiante = await this.estudianteRepository.findOneBy({ id });

    if (!estudiante) {
      throw new NotFoundException(`El estudiante con cedula:  ${id} no se encontro`);
    }

    const estudianteDeleted = await this.estudianteRepository.softRemove(estudiante);

    return { data: estudianteDeleted };
  }

  async removeAll(payload: EstudianteEntity[]): Promise<ServiceResponseHttpModel> {
    const estudianteDeleted = await this.estudianteRepository.softRemove(payload);
    return { data: estudianteDeleted };
  }
}
