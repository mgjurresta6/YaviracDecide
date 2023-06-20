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
  import { ResultadosService } from '@core/services';
  import { ResultadoEntity } from '@core/entities';
  import { ResponseHttpModel } from '@shared/models';
  
  @Controller('resultados')
  export class ResultadosController {
    constructor(private resultadosService: ResultadosService) {}
  
    @ApiOperation({ summary: 'Catalogo Resultados' })
    @Get('catalogue')
    @HttpCode(HttpStatus.OK)
    async catalogue(): Promise<ResponseHttpModel> {
      const serviceResponse = await this.resultadosService.catalogue();
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: `Catalogo Resultados`,
      title: `Catalogo`,
      };
    }
  
    @ApiOperation({ summary: 'Crear Resultado' })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.resultadosService.create(payload);
  
      return {
        data: serviceResponse.data,
        message: 'Resultado fue creada',
      title: 'Resultado Creada',
      };
    }
  
    @ApiOperation({ summary: 'Encontrar todas las Resultados' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.resultadosService.findAll(params);
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: 'Econtrar todas las Resultados',
      title: 'Exitoso',
      };
    }
  
    @ApiOperation({ summary: 'Encontar una Resultado' })
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.resultadosService.findOne(id);
  
      return {
        data: serviceResponse.data,
        message: `Encontar una Resultado`,
      title: `Exitoso`,
      };
    }
  
    @ApiOperation({ summary: 'Actualizar Resultado' })
    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() payload: any,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.resultadosService.update(id, payload);
      return {
        data: serviceResponse.data,
        message: `Resultado fue actualizada`,
      title: `Resultado Actualizada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar Resultado' })
    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.resultadosService.remove(id);
      return {
        data: serviceResponse.data,
        message: `Resultado fue eliminada`,
      title: `Resultado Eliminada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar todas las  Resultados' })
    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: ResultadoEntity[]): Promise<ResponseHttpModel> {
      const serviceResponse = await this.resultadosService.removeAll(payload);
  
      return {
        data: serviceResponse.data,
        message: `Resultados fueron eliminadas`,
      title: `Resultados Eliminadas`,
      };
    }
  }
  