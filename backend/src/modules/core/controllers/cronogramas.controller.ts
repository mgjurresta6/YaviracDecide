
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CronogramaEntity } from '@core/entities';
import { CronogramasService } from '@core/services';
import { ResponseHttpModel } from '@shared/models';

@Controller('cronogramas')
export class CronogramasController {
  constructor(private cronogramasService: CronogramasService) {}

  @ApiOperation({ summary: 'Create information Cronograma' })
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cronogramasService.create(
      payload,
    );

    return {
      data: serviceResponse.data,
      message: 'Cronograma fue creada',
      title: 'Cronograma Creada',
    };
  }

  @ApiOperation({ summary: '' })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query() params: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cronogramasService.findAll(
      params,
    );
    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: 'Econtrar todas las Cronogramas',
      title: 'Exitoso',
    };
  }

  @ApiOperation({ summary: 'View one information Cronograma' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cronogramasService.findOne(id);
    return {
      data: serviceResponse.data,
     message: `Encontar una Cronograma`,
      title: `Exitoso`,
    };
  }

  @ApiOperation({ summary: 'Update information Cronograma' })
  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cronogramasService.update(
      id,
      payload,
    );

    return {
      data: serviceResponse.data,
      message: `Cronograma fue actualizada`,
      title: `Cronograma Actualizada`,
    };
  }

  @ApiOperation({ summary: 'Remove information Cronograma' })
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cronogramasService.remove(id);
    return {
      data: serviceResponse.data,
      message: `Cronograma fue eliminada`,
      title: `Cronograma Eliminada`,
    };
  }

  @ApiOperation({ summary: 'Remove All Information Students' })
  @Patch('remove-all')
  @HttpCode(HttpStatus.CREATED)
  async removeAll(
    @Body() payload: CronogramaEntity[],
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cronogramasService.removeAll(
      payload,
    );

    return {
      data: serviceResponse.data,
      message: `Cronogramas fueron eliminadas`,
      title: `Cronogramas Eliminadas`,
    };
  }
}
