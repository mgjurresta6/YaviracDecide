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
import { CreateCareerDto, UpdateCareerDto, FilterCareerDto } from '@core/dto';
import { CarrerasService } from '@core/services';
import { CarreraEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';

@Controller('carreras')
export class CarrerasController {
  constructor(private carrerasService: CarrerasService) {}

  @ApiOperation({ summary: 'Catalogo Actividades' })
  @Get('catalogue')
  @HttpCode(HttpStatus.OK)
  async catalogue(): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.catalogue();

    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: `Catalogo Actividades`,
      title: `Catalogo`,
    };
  }

  @ApiOperation({ summary: 'Crear Actividad' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: any): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.create(payload);

    return {
      data: serviceResponse.data,
      message: 'Actividad fue creada',
      title: 'Actividad Creada',
    };
  }

  @ApiOperation({ summary: 'Encontrar todas las Actividades' })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() params: any): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.findAll(params);

    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: 'Econtrar todas las Actividades',
      title: 'Exitoso',
    };
  }

  @ApiOperation({ summary: 'Encontar una Actividad' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.findOne(id);

    return {
      data: serviceResponse.data,
      message: `Encontar una Actividad`,
      title: `Exitoso`,
    };
  }

  @ApiOperation({ summary: 'Actualizar Actividad' })
  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.update(id, payload);
    return {
      data: serviceResponse.data,
      message: `Actividad fue actualizada`,
      title: `Actividad Actualizada`,
    };
  }

  @ApiOperation({ summary: 'Borrar Actividad' })
  @Delete(':id')
  @HttpCode(HttpStatus.CREATED)
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.remove(id);
    return {
      data: serviceResponse.data,
      message: `Actividad fue eliminada`,
      title: `Actividad Eliminada`,
    };
  }

  @ApiOperation({ summary: 'Borrar todas las  Actividades' })
  @Patch('remove-all')
  @HttpCode(HttpStatus.CREATED)
  async removeAll(@Body() payload: CarreraEntity[]): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.removeAll(payload);

    return {
      data: serviceResponse.data,
      message: `Actividades fueron eliminadas`,
      title: `Actividades Eliminadas`,
    };
  }
}
