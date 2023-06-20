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
import { ListaEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
import { ListasService } from '@core/services';

@Controller('listas')
export class ListasController {
  constructor(private listasService: ListasService) {}

  @ApiOperation({ summary: 'Create Subject' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: any): Promise<ResponseHttpModel> {
    const serviceResponse = await this.listasService.create(payload);

    return {
      data: serviceResponse.data,
      message: 'Lista fue creada',
      title: 'Lista Creada',
    };
  }

  @ApiOperation({ summary: 'Find All Listas' })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() params: any): Promise<ResponseHttpModel> {
    const serviceResponse = await this.listasService.findAll(params);

    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: 'Econtrar todas las Listas',
      title: 'Exitoso',
    };
  }

  @ApiOperation({ summary: 'Find Subject' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.listasService.findOne(id);

    return {
      data: serviceResponse.data,
      message: `Encontar una Lista`,
      title: `Exitoso`,
    };
  }

  @ApiOperation({ summary: 'Update Subject' })
  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: any,
  ) {
    const serviceResponse = await this.listasService.update(id, payload);

    return {
      data: serviceResponse.data,
      message: `Lista fue actualizada`,
      title: `Lista Actualizada`,
    };
  }

  @ApiOperation({ summary: 'Delete Subject' })
  @Delete(':id')
  @HttpCode(HttpStatus.CREATED)
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.listasService.remove(id);

    return {
      data: serviceResponse.data,
      message: `Lista fue eliminada`,
      title: `Lista Eliminada`,
    };
  }

  @ApiOperation({ summary: 'Delete All Listas' })
  @Patch('remove-all')
  @HttpCode(HttpStatus.CREATED)
  async removeAll(
    @Body() payload: ListaEntity[],
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.listasService.removeAll(payload);

    return {
      data: serviceResponse.data,
      message: `Listas fueron eliminadas`,
      title: `Listas Eliminadas`,
    };
  }
}
