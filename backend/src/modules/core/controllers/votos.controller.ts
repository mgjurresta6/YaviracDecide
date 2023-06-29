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
  import { VotosService } from '@core/services';
  import { VotoEntity } from '@core/entities';
  import { ResponseHttpModel } from '@shared/models';
  
  @Controller('votos')
  export class VotosController {
    constructor(private votosService: VotosService) {}
  
    @ApiOperation({ summary: 'Catalogo Votos' })
    @Get('catalogue')
    @HttpCode(HttpStatus.OK)
    async catalogue(): Promise<ResponseHttpModel> {
      const serviceResponse = await this.votosService.catalogue();
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: `Catalogo Votos`,
        title: `Catalogo`,
      };
    }
  
    @ApiOperation({ summary: 'Crear Voto' })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.votosService.create(payload);
  
      return {
        data: serviceResponse.data,
        message: 'Voto fue creada',
        title: 'Voto Creada',
      };
    }
  
    @ApiOperation({ summary: 'Encontrar todas las Votos' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.votosService.findAll(params);
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: 'Econtrar todas las Votos',
        title: 'Exitoso',
      };
    }
  
    @ApiOperation({ summary: 'Encontar una Voto' })
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.votosService.findOne(id);
  
      return {
        data: serviceResponse.data,
        message: `Encontar una Voto`,
        title: `Exitoso`,
      };
    }
  
    @ApiOperation({ summary: 'Actualizar Voto' })
    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() payload: any,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.votosService.update(id, payload);
      return {
        data: serviceResponse.data,
        message: `Voto fue actualizada`,
        title: `Voto Actualizada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar Voto' })
    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.votosService.remove(id);
      return {
        data: serviceResponse.data,
        message: `Voto fue eliminada`,
        title: `Voto Eliminada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar todas las  Votos' })
    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: VotoEntity[]): Promise<ResponseHttpModel> {
      const serviceResponse = await this.votosService.removeAll(payload);
  
      return {
        data: serviceResponse.data,
        message: `Votos fueron eliminadas`,
        title: `Votos Eliminadas`,
      };
    }
  }
  