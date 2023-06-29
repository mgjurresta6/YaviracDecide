import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { CursoEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';
import{ CarrerasService, JornadasService, ParalelosService} from '@core/services';

@Injectable()
export class CursosService {
  constructor(
    @Inject(RepositoryEnum.CURSO_REPOSITORY)
    private cursoRepository: Repository<CursoEntity>,
    private carrerasService: CarrerasService,
    private jornadasService: JornadasService,
    private paralelosService: ParalelosService
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.cursoRepository.findAndCount({
      relations: ['carrera', 'jornada', 'paralelo'],
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

  async create(payload: CursoEntity): Promise<ServiceResponseHttpModel> {
    const newCurso = this.cursoRepository.create(payload);

    newCurso.carrera = await this.carrerasService.findOne(payload.carrera.id);
    newCurso.jornada = await this.jornadasService.findOne(payload.jornada.id);
    newCurso.paralelo = await this.paralelosService.findOne(payload.paralelo.id)

    const cursoCreated = await this.cursoRepository.save(newCurso);
    return { data: cursoCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.cursoRepository.findAndCount({
      relations: ['carrera'],
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: number): Promise<any> {
    const curso = await this.cursoRepository.findOne({
      relations: ['carrera'],
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
