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
import { ResponseHttpModel } from '@shared/models';
import { JornadasService } from '@core/services';
import { JornadaEntity } from '@core/entities';

@Controller('jornadas')
export class JornadasController {
  constructor(private jornadasService: JornadasService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() payload: any): Promise<ResponseHttpModel> {
    const serviceResponse = await this.jornadasService.create(payload);

    return {
      data: serviceResponse,
      message: 'Jornada fue creada',
      title: 'Jornada Creada',
    };
  }

  @ApiOperation({ summary: 'Catalogo Jornadas' })
  @Get('catalogue')
  @HttpCode(HttpStatus.OK)
  async catalogue(): Promise<ResponseHttpModel> {
    return {
      data: { s: 'sd' },
      pagination: 'asd',
      message: `catalogo Jornadas`,
      title: `Catalogue`,
    };
    const serviceResponse = await this.jornadasService.catalogue();

    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: 'Econtrar todas las Jornadas',
      title: 'Exitoso',
    };
  }

  @ApiOperation({ summary: 'Encontrar Jornada' })
  // @Roles(RoleEnum.ADMIN)
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() params: any): Promise<ResponseHttpModel> {
    const serviceResponse = await this.jornadasService.findAll(params);
    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: `Encontar una Jornada`,
      title: `Exitoso`,
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', ParseUUIDPipe) id: number,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.jornadasService.findOne(id);
    return {
      data: serviceResponse,
      message: `Jornada fue actualizada`,
      title: `Jornada Actualizada`,
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id', ParseUUIDPipe) id: number,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.jornadasService.update(id, payload);

    return {
      data: serviceResponse,
      message: `Jornada fue eliminada`,
      title: `Jornada Eliminada`,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.CREATED)
  async remove(
    @Param('id', ParseUUIDPipe) id: number,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.jornadasService.remove(id);

    return {
      data: serviceResponse,
      //message: `User deleted ${id}`,
      //title: `Deleted`,
      message: `Jornadas fueron eliminadas`,
      title: `Jornadas Eliminadas`,
    };
  }

  @Patch('remove-all')
  @HttpCode(HttpStatus.CREATED)
  async removeAll(@Body() payload: JornadaEntity[]) {
    const serviceResponse = await this.jornadasService.removeAll(payload);

    return {
      data: serviceResponse,
      message: `Jornadas fueron eliminadas`,
      title: `Jornadas Eliminadas`,
    };
  }
}
