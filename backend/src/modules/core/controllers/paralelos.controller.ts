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
  import { ParalelosService } from '@core/services';
  import { ParaleloEntity } from '@core/entities';
  import { ResponseHttpModel } from '@shared/models';
  
  @Controller('paralelos')
  export class ParalelosController {
    constructor(private paralelosService: ParalelosService) {}
  
    @ApiOperation({ summary: 'Catalogo Paralelos' })
    @Get('catalogue')
    @HttpCode(HttpStatus.OK)
    async catalogue(): Promise<ResponseHttpModel> {
      const serviceResponse = await this.paralelosService.catalogue();
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: 'Catalogo Paralelo',
      title: 'Catalogo',
      };
    }
  
    @ApiOperation({ summary: 'Crear Paralelo' })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.paralelosService.create(payload);
  
      return {
        data: serviceResponse.data,
        message: 'Paralelo fue creada',
      title: 'Paralelo Creada',
        
      };
    }
  
    @ApiOperation({ summary: 'Encontrar todas las Paralelos' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.paralelosService.findAll(params);
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: 'Econtrar todas las Paralelos',
      title: 'Exitoso',
        
      };
    }
  
    @ApiOperation({ summary: 'Encontar una Paralelo' })
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(
      @Param('id', ParseUUIDPipe) id: number,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.paralelosService.findOne(id);
  
      return {
        data: serviceResponse.data,
        message: `Encontar una Paralelo`,
      title: `Exitoso`,
        
      };
    }
  
    @ApiOperation({ summary: 'Actualizar Paralelo' })
    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(
      @Param('id', ParseUUIDPipe) id: number,
      @Body() payload: any,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.paralelosService.update(id, payload);
      return {
        data: serviceResponse.data,
        message: `Paralelo fue actualizada`,
      title: `Paralelo Actualizada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar Paralelo' })
    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(
      @Param('id', ParseUUIDPipe) id: number,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.paralelosService.remove(id);
      return {
        data: serviceResponse.data,
        message: `Paralelo fue eliminada`,
      title: `Paralelo Eliminada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar todas las  Paralelos' })
    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: ParaleloEntity[]): Promise<ResponseHttpModel> {
      const serviceResponse = await this.paralelosService.removeAll(payload);
  
      return {
        data: serviceResponse.data,
         message: `Paralelos fueron eliminadas`,
      title: `Paralelos Eliminadas`,
      };
    }
  }
  