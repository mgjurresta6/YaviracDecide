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
import { ConfiguracionEntity } from '@core/entities';
import { ConfiguracionesService } from '@core/services';
import { ResponseHttpModel } from '@shared/models';

@Controller('configuraciones')
export class ConfiguracionesController {
  constructor(private configuracionesService: ConfiguracionesService) {}

  @ApiOperation({ summary: 'Create Curriculum' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.configuracionesService.create(payload);

    return {
      data: serviceResponse.data,
      message: 'The curriculum was created',
      title: 'Curriculum Created',
    };
  }

  @ApiOperation({ summary: 'Find All Curricula' })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query() params: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.configuracionesService.findAll(params);

    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: 'Find all curricula',
      title: 'Success',
    };
  }

  @ApiOperation({ summary: 'Find Curriculum' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.configuracionesService.findOne(id);

    return {
      data: serviceResponse.data,
      message: 'Find curriculum',
      title: `Success`,
    };
  }

  @ApiOperation({ summary: 'Update Curriculum' })
  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.configuracionesService.update(id, payload);

    return {
      data: serviceResponse.data,
      message: 'The curriculum was updated',
      title: 'Curriculum Updated',
    };
  }

  @ApiOperation({ summary: 'Delete Curriculum' })
  @Delete(':id')
  @HttpCode(HttpStatus.CREATED)
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.configuracionesService.remove(id);

    return {
      data: serviceResponse.data,
      message: 'The curriculum was deleted',
      title: `Curriculum Deleted`,
    };
  }

  @ApiOperation({ summary: 'Delete All Curricula' })
  @Patch('remove-all')
  @HttpCode(HttpStatus.CREATED)
  async removeAll(
    @Body() payload: ConfiguracionEntity[],
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.configuracionesService.removeAll(payload);

    return {
      data: serviceResponse.data,
      message: 'The curricula was deleted',
      title: 'Curricula Deleted',
    };
  }
}
