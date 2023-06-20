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
import { CronogramaEntity } from '@core/entities';
import { CronogramasService } from '@core/services';
import { ResponseHttpModel } from '@shared/models';

@Controller('cronogramas')
export class CronogramasController {
  constructor(private cronogramasService: CronogramasService) {}

  @ApiOperation({ summary: 'Create information students' })
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cronogramasService.create(
      payload,
    );

    return {
      data: serviceResponse.data,
      message: 'created',
      title: 'Created',
    };
  }

  @ApiOperation({ summary: 'List of information students' })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query() params: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cronogramasService.findAll(
      params,
    );
    return {
      data: serviceResponse.data,
      pagination: serviceResponse.pagination,
      message: `index`,
      title: 'Success',
    };
  }

  @ApiOperation({ summary: 'View one information students' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cronogramasService.findOne(id);
    return {
      data: serviceResponse.data,
      message: `show ${id}`,
      title: `Success`,
    };
  }

  @ApiOperation({ summary: 'Update information students' })
  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: any,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cronogramasService.update(
      id,
      payload,
    );

    return {
      data: serviceResponse.data,
      message: `Information Student  updated ${id}`,
      title: `Updated`,
    };
  }

  @ApiOperation({ summary: 'Remove information students' })
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cronogramasService.remove(id);
    return {
      data: serviceResponse.data,
      message: `Information Student deleted ${id}`,
      title: `Deleted`,
    };
  }

  @ApiOperation({ summary: 'Remove All Information Students' })
  @Patch('remove-all')
  @HttpCode(HttpStatus.CREATED)
  async removeAll(
    @Body() payload: CronogramaEntity[],
  ): Promise<ResponseHttpModel> {
    const serviceResponse = await this.cronogramasService.removeAll(
      payload,
    );

    return {
      data: serviceResponse.data,
      message: `Information Students deleted`,
      title: `Deleted`,
    };
  }
}
