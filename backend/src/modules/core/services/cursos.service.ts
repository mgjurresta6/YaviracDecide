import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import {
  CreateCareerDto,
  UpdateCareerDto,
  FilterCareerDto,
  PaginationDto,
} from '@core/dto';
import { CursoEntity } from '@core/entities';
import { CataloguesService } from '@core/services';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';

@Injectable()
export class CursosService {
  constructor(
    @Inject(RepositoryEnum.CURSO_REPOSITORY)
    private cursoRepository: Repository<CursoEntity>,
    private cataloguesService: CataloguesService,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.cursoRepository.findAndCount({
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
    const newCurso = this.cursoRepository.create(payload);

    // newCareer.institution = await this.institutionService.findOne(
    //   payload.institution.id,
    // );

    newCurso.modality = await this.cataloguesService.findOne(
      payload.modality.id,
    );

    newCurso.state = await this.cataloguesService.findOne(payload.state.id);

    newCurso.type = await this.cataloguesService.findOne(payload.type.id);

    const cursoCreated = await this.cursoRepository.save(newCurso);

    return { data: cursoCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.cursoRepository.findAndCount({
      relations: ['institution', 'modality', 'state', 'type'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: number): Promise<any> {
    const curso = await this.cursoRepository.findOne({
      relations: ['institution', 'modality', 'state', 'type'],
      where: {
        id,
      },
    });

    if (!curso) {
      throw new NotFoundException(`El curso con id:  ${id} no se encontro`);
    }
    return { data: curso };
  }

  async update(
    id: number,
    payload: any,
  ): Promise<ServiceResponseHttpModel> {
    const curso = await this.cursoRepository.findOneBy({ id });
    if (!curso) {
      throw new NotFoundException(`El curso con id:  ${id} no se encontro`);
    }
    this.cursoRepository.merge(curso, payload);
    const cursoUpdated = await this.cursoRepository.save(curso);
    return { data: cursoUpdated };
  }

  async remove(id: number): Promise<ServiceResponseHttpModel> {
    const curso = await this.cursoRepository.findOneBy({ id });

    if (!curso) {
      throw new NotFoundException(`El curso con id:  ${id} no se encontro`);
    }

    const cursoDeleted = await this.cursoRepository.softRemove(curso);

    return { data: cursoDeleted };
  }

  async removeAll(payload: CursoEntity[]): Promise<ServiceResponseHttpModel> {
    const cursosDeleted = await this.cursoRepository.softRemove(payload);
    return { data: cursosDeleted };
  }
}
