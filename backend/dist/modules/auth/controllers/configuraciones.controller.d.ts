import { UpdateCurriculumDto, CreateCurriculumDto, FilterCurriculumDto } from '@core/dto';
import { ConfiguracionEntity } from '@core/entities';
import { ConfiguracionesService } from '@core/services';
import { ResponseHttpModel } from '@shared/models';
export declare class ConfiguracionesController {
    private configuracionesService;
    constructor(configuracionesService: ConfiguracionesService);
    create(payload: CreateCurriculumDto): Promise<ResponseHttpModel>;
    findAll(params: FilterCurriculumDto): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateCurriculumDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: ConfiguracionEntity[]): Promise<ResponseHttpModel>;
}
