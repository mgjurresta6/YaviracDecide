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
  import { RolesService } from '@core/services';
  import { RolEntity } from '@core/entities';
  import { ResponseHttpModel } from '@shared/models';
  
  @Controller('roles')
  export class RolesController {
    constructor(private rolesService: RolesService) {}
  
    @ApiOperation({ summary: 'Catalogo Roles' })
    @Get('catalogue')
    @HttpCode(HttpStatus.OK)
    async catalogue(): Promise<ResponseHttpModel> {
      const serviceResponse = await this.rolesService.catalogue();
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: `Catalogo Roles`,
      title: `Catalogo`,
      };
    }
  
    @ApiOperation({ summary: 'Crear Rol' })
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.rolesService.create(payload);
  
      return {
        data: serviceResponse.data,
        message: 'Rol fue creada',
      title: 'Rol Creada',
      };
    }
  
    @ApiOperation({ summary: 'Encontrar todas las Roles' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: any): Promise<ResponseHttpModel> {
      const serviceResponse = await this.rolesService.findAll(params);
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: 'Econtrar todas las Roles',
      title: 'Exitoso',
      };
    }
  
    @ApiOperation({ summary: 'Encontar una Rol' })
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(
      @Param('id', ParseUUIDPipe) id: number,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.rolesService.findOne(id);
  
      return {
        data: serviceResponse.data,
        message: `Encontar una Rol`,
      title: `Exitoso`,
      };
    }
  
    @ApiOperation({ summary: 'Actualizar Rol' })
    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(
      @Param('id', ParseUUIDPipe) id: number,
      @Body() payload: any,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.rolesService.update(id, payload);
      return {
        data: serviceResponse.data,
        message: `Rol fue actualizada`,
      title: `Rol Actualizada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar Rol' })
    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(
      @Param('id', ParseUUIDPipe) id: number,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.rolesService.remove(id);
      return {
        data: serviceResponse.data,
        message: `Rol fue eliminada`,
      title: `Rol Eliminada`,
      };
    }
  
    @ApiOperation({ summary: 'Borrar todas las  Roles' })
    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: RolEntity[]): Promise<ResponseHttpModel> {
      const serviceResponse = await this.rolesService.removeAll(payload);
  
      return {
        data: serviceResponse.data,
        message: `Roles fueron eliminadas`,
      title: `Roles Eliminadas`,
      };
    }
  }
  