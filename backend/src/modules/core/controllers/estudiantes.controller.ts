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
  import { EstudiantesService } from '@core/services';
  import { EstudianteEntity } from '@core/entities';
  import { ResponseHttpModel } from '@shared/models';
  
  @Controller('estudiantes')
  export class EstudiantesController {
    constructor(private estudiantesService: EstudiantesService) {}
  
    @ApiOperation({ summary: 'Catalogo Usuarios' })
    @Get('catalogue')
    @HttpCode(HttpStatus.OK)
    async catalogue(): Promise<ResponseHttpModel> {
      const serviceResponse = await this.estudiantesService.catalogue();
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: `Catalogo estudiantes`,
        title: `Catalogo`,
      };
    }
  
    @ApiOperation({ summary: 'Crear estudiante' })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.estudiantesService.create(payload);
  
      return {
        data: serviceResponse.data,
        message: 'estudiante fue creada',
        title: 'estudiante Creada',
      };
    }
  
    @ApiOperation({ summary: 'Encontrar todas las estudiantes' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.estudiantesService.findAll(params);
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: 'Econtrar todas las estudiantes',
        title: 'Exitoso',
      };
    }
  
    @ApiOperation({ summary: 'Encontar una estudiante' })
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.estudiantesService.findOne(id);
  
      return {
        data: serviceResponse.data,
        message: `Encontar una estudiante`,
        title: `Exitoso`,
      };
    }
  
    @ApiOperation({ summary: 'Actualizar estudiante' })
    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() payload: any,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.estudiantesService.update(id, payload);
      return {
        data: serviceResponse.data,
        message: `estudiante fue actualizada`,
        title: `estudiante Actualizada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar estudiante' })
    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.estudiantesService.remove(id);
      return {
        data: serviceResponse.data,
        message: `estudiante fue eliminada`,
        title: `estudiante Eliminada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar todas las  estudiantes' })
    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: EstudianteEntity[]): Promise<ResponseHttpModel> {
      const serviceResponse = await this.estudiantesService.removeAll(payload);
  
      return {
        data: serviceResponse.data,
        message: `estudiantes fueron eliminadas`,
        title: `estudiantes Eliminadas`,
      };
    }
  }
  