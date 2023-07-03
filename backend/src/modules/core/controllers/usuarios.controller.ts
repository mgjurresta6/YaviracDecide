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
  import { UsuariosService } from '@core/services';
  import { UsuarioEntity } from '@core/entities';
  import { ResponseHttpModel } from '@shared/models';
  
  @Controller('usuarios')
  export class UsuariosController {
    constructor(private usuariosService: UsuariosService) {}
  
    @ApiOperation({ summary: 'Catalogo Usuarios' })
    @Get('catalogue')
    @HttpCode(HttpStatus.OK)
    async catalogue(): Promise<ResponseHttpModel> {
      const serviceResponse = await this.usuariosService.catalogue();
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: `Catalogo Usuarios`,
        title: `Catalogo`,
      };
    }
  
    @ApiOperation({ summary: 'Crear Usuario' })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.usuariosService.create(payload);
  
      return {
        data: serviceResponse.data,
        message: 'Usuario fue creada',
        title: 'Usuario Creada',
      };
    }
  
    @ApiOperation({ summary: 'Encontrar todas las Usuarios' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.usuariosService.findAll(params);
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: 'Econtrar todas las Usuarios',
        title: 'Exitoso',
      };
    }
  
    @ApiOperation({ summary: 'Encontar una Usuario' })
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.usuariosService.findOne(id);
  
      return {
        data: serviceResponse.data,
        message: `Encontar una Usuario`,
        title: `Exitoso`,
      };
    }
  
    @ApiOperation({ summary: 'Actualizar Usuario' })
    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() payload: any,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.usuariosService.update(id, payload);
      return {
        data: serviceResponse.data,
        message: `Usuario fue actualizada`,
        title: `Usuario Actualizada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar Usuario' })
    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.usuariosService.remove(id);
      return {
        data: serviceResponse.data,
        message: `Usuario fue eliminada`,
        title: `Usuario Eliminada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar todas las  Usuarios' })
    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: UsuarioEntity[]): Promise<ResponseHttpModel> {
      const serviceResponse = await this.usuariosService.removeAll(payload);
  
      return {
        data: serviceResponse.data,
        message: `Usuarios fueron eliminadas`,
        title: `Usuarios Eliminadas`,
      };
    }
  }
  