import { CreateInformationTeacherDto, FilterInformationTeacherDto, UpdateInformationTeacherDto } from '@core/dto';
import { CursoEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
import { CursosService } from '@core/services';
export declare class CursosController {
    private cursosService;
    constructor(cursosService: CursosService);
    create(payload: CreateInformationTeacherDto): Promise<ResponseHttpModel>;
    findAll(params: FilterInformationTeacherDto): Promise<ResponseHttpModel>;
    findOne(id: number): Promise<ResponseHttpModel>;
    update(id: number, payload: UpdateInformationTeacherDto): Promise<ResponseHttpModel>;
    remove(id: number): Promise<ResponseHttpModel>;
    removeAll(payload: CursoEntity[]): Promise<ResponseHttpModel>;
}
