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
  import { TipoListasService } from '@core/services';
  import { TipoListaEntity } from '@core/entities';
  import { ResponseHttpModel } from '@shared/models';
  
  @Controller('tipolistas')
  export class TipoListasController {
    constructor(private tipolistasService: TipoListasService) {}
  
    @ApiOperation({ summary: 'Catalogo Tipos de lista' })
    @Get('catalogue')
    @HttpCode(HttpStatus.OK)
    async catalogue(): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipolistasService.catalogue();
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: `Catalogo Tipos de lista`,
      title: `Catalogo`,
      };
    }
  
    @ApiOperation({ summary: 'Crear Tipo de lista' })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipolistasService.create(payload);
  
      return {
        data: serviceResponse.data,
        message: 'Tipo de lista fue creada',
        title: 'Tipo de lista Creada',
      };
    }
  
    @ApiOperation({ summary: 'Encontrar todas las Tipos de lista' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipolistasService.findAll(params);
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: 'Econtrar todas las Tipos de lista',
      title: 'Exitoso',
      };
    }
  
    @ApiOperation({ summary: 'Encontar una Tipo de lista' })
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(
      @Param('id', ParseUUIDPipe) id: number,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipolistasService.findOne(id);
  
      return {
        data: serviceResponse.data,
        message: `Encontar una Tipo de lista`,
      title: `Exitoso`,
      };
    }
  
    @ApiOperation({ summary: 'Actualizar Tipo de lista' })
    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(
      @Param('id', ParseUUIDPipe) id: number,
      @Body() payload: any,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipolistasService.update(id, payload);
      return {
        data: serviceResponse.data,
        message: `Tipo de lista fue actualizada`,
      title: `Tipo de lista Actualizada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar Tipo de lista' })
    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(
      @Param('id', ParseUUIDPipe) id: number,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipolistasService.remove(id);
      return {
        data: serviceResponse.data,
        message: `Tipo de lista fue eliminada`,
        title: `Tipo de lista Eliminada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar todas las  Tipos de lista' })
    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: TipoListaEntity[]): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipolistasService.removeAll(payload);
  
      return {
        data: serviceResponse.data,
        message: `Tipos de lista fueron eliminadas`,
        title: `Tipos de lista Eliminadas`,
      };
    }
  }
  