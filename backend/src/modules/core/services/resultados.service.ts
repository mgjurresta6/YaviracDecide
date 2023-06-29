import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { ResultadoEntity } from '@core/entities';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';


@Injectable()
export class ResultadosService {
  constructor(
    @Inject(RepositoryEnum.RESULTADO_REPOSITORY)
    private resultadoRepository: Repository<ResultadoEntity>,
  ) {}

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.resultadoRepository.findAndCount({
      
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

  async create(payload: ResultadoEntity): Promise<ServiceResponseHttpModel> {
    const newResultado = this.resultadoRepository.create(payload);



    const resultadoCreated = await this.resultadoRepository.save(newResultado);

    return { data: resultadoCreated };
  }
  async findAll(params?: any): Promise<ServiceResponseHttpModel> {
    const data = await this.resultadoRepository.findAndCount({
    });

    return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
  }
  async findOne(id: string): Promise<any> {
    const resultado = await this.resultadoRepository.findOne({
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
