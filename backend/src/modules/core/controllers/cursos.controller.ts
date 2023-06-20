import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CursoEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
import { CursosService } from '@core/services';


@Controller('cursos')
export class CursosController {
  constructor(private cursosService: CursosService) {}

  @ApiOperation({ summary: 'Create Information Teacher' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cursosService.create(
      payload,
    );

    return {
      data: serviceResponse.data,
      message: 'Curso fue creada',
      title: 'Curso Creada',
    };
  }

  @ApiOperation({ summary: 'Find All Information Cursos' })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query() params: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cursosService.findAll(
      params,
    );
    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: 'Econtrar todas las Cursos',
      title: 'Exitoso',
    };
  }

  @ApiOperation({ summary: 'Find Information Teacher' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', ParseUUIDPipe) id: number,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cursosService.findOne(id);

    return {
      data: serviceResponse.data,
      message: `Encontar una Curso`,
      title: `Exitoso`,
    };
  }

  @ApiOperation({ summary: 'Update Information Teacher' })
  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id', ParseUUIDPipe) id: number,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cursosService.update(
      id,
      payload,
    );

    return {
      data: serviceResponse.data,
      message: `Curso fue actualizada`,
      title: `Curso Actualizada`,
    };
  }

  @ApiOperation({ summary: 'Delete Information Teacher' })
  @Delete(':id')
  @HttpCode(HttpStatus.CREATED)
  async remove(
    @Param('id', ParseUUIDPipe) id: number,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cursosService.remove(id);

    return {
      data: serviceResponse.data,
      message: `Curso fue eliminada`,
      title: `Curso Eliminada`,
    };
  }

  @ApiOperation({ summary: 'Delete All Information Cursos' })
  @Patch('remove-all')
  @HttpCode(HttpStatus.CREATED)
  async removeAll(
    @Body() payload: CursoEntity[],
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cursosService.removeAll(
      payload,
    );

    return {
      data: serviceResponse.data,
      message: `Cursos fueron eliminadas`,
      title: `Cursos Eliminadas`,
    };
  }
}
