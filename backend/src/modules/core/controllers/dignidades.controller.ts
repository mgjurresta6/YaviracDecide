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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DignidadEntity } from '@core/entities';
import { DignidadesService } from '@core/services';
import { ResponseHttpModel } from '@shared/models';


@Controller('dignidades')
export class DignidadesController {
  constructor(private dignidadesService: DignidadesService) {}

  @ApiOperation({ summary: 'Create Institution' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.dignidadesService.create(payload);
    return {
      data: serviceResponse.data,
      message: 'Dignidad fue creada',
      title: 'Dignidad Creada',
    };
  }

  @ApiOperation({ summary: 'Find All Dignidades' })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query() params: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.dignidadesService.findAll(params);
    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: 'Econtrar todas las Dignidades',
      title: 'Exitoso',
    };
  }

  @ApiOperation({ summary: 'Find Institution' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', ParseUUIDPipe) id: number,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.dignidadesService.findOne(id);
    return {
      data: serviceResponse.data,
      message: `Encontar una Dignidad`,
      title: `Exitoso`,
    };
  }

  @ApiOperation({ summary: 'Update Institution' })
  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id', ParseUUIDPipe) id: number,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.dignidadesService.update(id, payload);
    return {
      data: serviceResponse.data,
      message: `Dignidad fue actualizada`,
      title: `Dignidad Actualizada`,
    };
  }

  @ApiOperation({ summary: 'Delete Institution' })
  @Delete(':id')
  @HttpCode(HttpStatus.CREATED)
  async remove(
    @Param('id', ParseUUIDPipe) id: number,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.dignidadesService.remove(id);
    return {
      data: serviceResponse.data,
      message: `Dignidad fue eliminada`,
      title: `Dignidad Eliminada`,
    };
  }

  @ApiOperation({ summary: 'Delete All Dignidades' })
  @Patch('remove-all')
  @HttpCode(HttpStatus.CREATED)
  async removeAll(
    @Body() payload: DignidadEntity[],
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.dignidadesService.removeAll(payload);

    return {
      data: serviceResponse.data,
      message: `Dignidades fueron eliminadas`,
      title: `Dignidades Eliminadas`,
    };
  }
}
