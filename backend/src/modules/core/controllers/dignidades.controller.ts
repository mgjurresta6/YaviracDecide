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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreateInstitutionDto,
  FilterInstitutionDto,
  UpdateInstitutionDto,
} from '@core/dto';
import { DignidadEntity } from '@core/entities';
import { DignidadesService } from '@core/services';
import { ResponseHttpModel } from '@shared/models';


@Controller('dignidades')
export class DignidadesController {
  constructor(private dignidadesService: DignidadesService) {}

  @ApiOperation({ summary: 'Create Institution' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.dignidadesService.create(payload);
    return {
      data: serviceResponse.data,
      message: `Institution was created`,
      title: 'Institution Created',
    };
  }

  @ApiOperation({ summary: 'Find All Institutions' })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query() params: FilterInstitutionDto,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.dignidadesService.findAll(params);
    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: `Find all institutions`,
      title: 'Success',
    };
  }

  @ApiOperation({ summary: 'Find Institution' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', ParseUUIDPipe) id: number,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.dignidadesService.findOne(id);
    return {
      data: serviceResponse.data,
      message: 'Find Institution',
      title: `Success`,
    };
  }

  @ApiOperation({ summary: 'Update Institution' })
  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id', ParseUUIDPipe) id: number,
    @Body() payload: UpdateInstitutionDto,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.dignidadesService.update(id, payload);
    return {
      data: serviceResponse.data,
      message: 'Institution was updated',
      title: `Institution Updated`,
    };
  }

  @ApiOperation({ summary: 'Delete Institution' })
  @Delete(':id')
  @HttpCode(HttpStatus.CREATED)
  async remove(
    @Param('id', ParseUUIDPipe) id: number,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.dignidadesService.remove(id);
    return {
      data: serviceResponse.data,
      message: 'Institution was deleted',
      title: 'Institution Deleted',
    };
  }

  @ApiOperation({ summary: 'Delete All Institutions' })
  @Patch('remove-all')
  @HttpCode(HttpStatus.CREATED)
  async removeAll(
    @Body() payload: DignidadEntity[],
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.dignidadesService.removeAll(payload);

    return {
      data: serviceResponse.data,
      message: 'Institutions was deleted',
      title: 'Institutions Deleted',
    };
  }
}
