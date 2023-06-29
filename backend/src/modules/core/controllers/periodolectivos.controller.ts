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
  import { PeriodosService } from '@core/services';
  import { PeriodoEntity } from '@core/entities';
  import { ResponseHttpModel } from '@shared/models';
  
  @Controller('periodos')
  export class PeriodoLectivosController {
    constructor(private periodolectivosService: PeriodosService) {}
  /*
    @ApiOperation({ summary: 'Catalogo Periodos lectivos' })
    @Get('catalogue')
    @HttpCode(HttpStatus.OK)
    async catalogue(): Promise<ResponseHttpModel> {
      const serviceResponse = await this.periodolectivosService.catalogue();
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: 'Catalogo Periodo',
      title: 'Catalogo',
      };
    }
  
    @ApiOperation({ summary: 'Crear Periodo lectivo' })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.periodolectivosService.create(payload);
  
      return {
        data: serviceResponse.data,
        message: 'Periodo lectivo fue creada',
      title: 'Periodo lectivo Creada',
        
      };
    }
  
    @ApiOperation({ summary: 'Encontrar todas las Periodos lectivos' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.periodolectivosService.findAll(params);
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: 'Econtrar todas las Periodos lectivos',
        title: 'Exitoso',
        
      };
    }
  
    @ApiOperation({ summary: 'Encontar una Periodo lectivo' })
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(
      @Param('id', ParseUUIDPipe) id: number,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.periodolectivosService.findOne(id);
  
      return {
        data: serviceResponse.data,
        message: `Encontar una Periodo lectivo`,
      title: `Exitoso`,
        
      };
    }
  
    @ApiOperation({ summary: 'Actualizar Periodo lectivo' })
    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(
      @Param('id', ParseUUIDPipe) id: number,
      @Body() payload: any,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.periodolectivosService.update(id, payload);
      return {
        data: serviceResponse.data,
        message: `Periodo lectivo fue actualizada`,
      title: `Periodo lectivo Actualizada`,
        
      };
    }
  
    @ApiOperation({ summary: 'Borrar Periodo lectivo' })
    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(
      @Param('id', ParseUUIDPipe) id: number,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.periodolectivosService.remove(id);
      return {
        data: serviceResponse.data,
        message: `Periodo lectivo fue eliminada`,
      title: `Periodo lectivo Eliminada`,
        
      };
    }
  
    @ApiOperation({ summary: 'Borrar todas las  Periodos lectivos' })
    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: PeriodoEntity[]): Promise<ResponseHttpModel> {
      const serviceResponse = await this.periodolectivosService.removeAll(payload);
  
      return {
        data: serviceResponse.data,
        message: `Todos los Periodos lectivos fueron eliminadas`,
      title: ` Todos los Periodos lectivos Eliminadas`,
      };
    }*/
  }
  