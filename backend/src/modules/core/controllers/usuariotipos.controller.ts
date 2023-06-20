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
  import { TipoUsuariosService } from '@core/services';
  import { TipoEntity } from '@core/entities';
  import { ResponseHttpModel } from '@shared/models';
  
  @Controller('tipousuarios')
  export class tipoUsuariosController {
    constructor(private tipousuariosService: TipoUsuariosService) {}
  
    @ApiOperation({ summary: 'Catalogo Tipos de usuario' })
    @Get('catalogue')
    @HttpCode(HttpStatus.OK)
    async catalogue(): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipousuariosService.catalogue();
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: `Catalogo Tipos de usuario`,
        title: `Catalogo`,
      };
    }
  
    @ApiOperation({ summary: 'Crear Tipo de usuario' })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipousuariosService.create(payload);
  
      return {
        data: serviceResponse.data,
        message: 'Tipo de usuario fue creada',
        title: 'Tipo de usuario Creada',
      };
    }
  
    @ApiOperation({ summary: 'Encontrar todas las Tipos de usuario' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipousuariosService.findAll(params);
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: 'Econtrar todas las Tipos de usuario',
        title: 'Exitoso',
      };
    }
  
    @ApiOperation({ summary: 'Encontar una Tipo de usuario' })
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(
      @Param('id', ParseUUIDPipe) id: number,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipousuariosService.findOne(id);
  
      return {
        data: serviceResponse.data,
        message: `Encontar una Tipo de usuario`,
        title: `Exitoso`,
      };
    }
  
    @ApiOperation({ summary: 'Actualizar Tipo de usuario' })
    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(
      @Param('id', ParseUUIDPipe) id: number,
      @Body() payload: any,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipousuariosService.update(id, payload);
      return {
        data: serviceResponse.data,
        message: `Tipo de usuario fue actualizada`,
        title: `Tipo de usuario Actualizada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar Tipo de usuario' })
    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(
      @Param('id', ParseUUIDPipe) id: number,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipousuariosService.remove(id);
      return {
        data: serviceResponse.data,
        message: `Tipo de usuario fue eliminada`,
        title: `Tipo de usuario Eliminada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar todas las  Tipos de usuario' })
    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: TipoEntity[]): Promise<ResponseHttpModel> {
      const serviceResponse = await this.tipousuariosService.removeAll(payload);
  
      return {
        data: serviceResponse.data,
        message: `Tipos de usuario fueron eliminadas`,
        title: `Tipos de usuario Eliminadas`,
      };
    }
  }
  