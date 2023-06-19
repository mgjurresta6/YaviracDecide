import { UpdateCurriculumDto, CreateCurriculumDto, FilterCurriculumDto } from '@core/dto';
import { CurriculumEntity } from '@core/entities';
import { CurriculaService } from '@core/services';
import { ResponseHttpModel } from '@shared/models';
export declare class CurriculaController {
    private curriculaService;
    constructor(curriculaService: CurriculaService);
    create(payload: CreateCurriculumDto): Promise<ResponseHttpModel>;
    findAll(params: FilterCurriculumDto): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateCurriculumDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: CurriculumEntity[]): Promise<ResponseHttpModel>;
}
