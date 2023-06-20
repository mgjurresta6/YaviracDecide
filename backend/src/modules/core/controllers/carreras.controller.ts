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
import { CarrerasService } from '@core/services';
import { CarreraEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';

@Controller('carreras')
export class CarrerasController {
  constructor(private carrerasService: CarrerasService) {}

  @ApiOperation({ summary: 'Catalogo Carreras' })
  @Get('catalogue')
  @HttpCode(HttpStatus.OK)
  async catalogue(): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.catalogue();

    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: `Catalogo Carreras`,
      title: `Catalogo`,
    };
  }

  @ApiOperation({ summary: 'Crear Carrera' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: any): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.create(payload);

    return {
      data: serviceResponse.data,
      message: 'Carrera fue creada',
      title: 'Carrera Creada',
    };
  }

  @ApiOperation({ summary: 'Encontrar todas las Carreras' })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() params: any): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.findAll(params);

    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: 'Econtrar todas las Carreras',
      title: 'Exitoso',
    };
  }

  @ApiOperation({ summary: 'Encontar una Carrera' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.findOne(id);

    return {
      data: serviceResponse.data,
      message: `Encontar una Carrera`,
      title: `Exitoso`,
    };
  }

  @ApiOperation({ summary: 'Actualizar Carrera' })
  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.update(id, payload);
    return {
      data: serviceResponse.data,
      message: `Carrera fue actualizada`,
      title: `Carrera Actualizada`,
    };
  }

  @ApiOperation({ summary: 'Borrar Carrera' })
  @Delete(':id')
  @HttpCode(HttpStatus.CREATED)
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.remove(id);
    return {
      data: serviceResponse.data,
      message: `Carrera fue eliminada`,
      title: `Carrera Eliminada`,
    };
  }

  @ApiOperation({ summary: 'Borrar todas las  Carreras' })
  @Patch('remove-all')
  @HttpCode(HttpStatus.CREATED)
  async removeAll(@Body() payload: CarreraEntity[]): Promise<ResponseHttpModel> {
    const serviceResponse = await this.carrerasService.removeAll(payload);

    return {
      data: serviceResponse.data,
      message: `Carreras fueron eliminadas`,
      title: `Carreras Eliminadas`,
    };
  }
}
